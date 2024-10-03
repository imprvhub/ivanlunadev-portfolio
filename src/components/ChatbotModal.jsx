import React, { useState, useRef, useEffect } from 'react';

const ChatbotModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const cleanMarkdown = (text) => {
    return text
      // Elimina **texto** (negrita)
      .replace(/\*\*(.*?)\*\*/g, '$1')
      // Elimina *texto* (cursiva)
      .replace(/\*(.*?)\*/g, '$1')
      // Elimina __texto__ (negrita alternativa)
      .replace(/__(.*?)__/g, '$1')
      // Elimina _texto_ (cursiva alternativa)
      .replace(/_(.*?)_/g, '$1')
      // Elimina # headers
      .replace(/^#+\s/gm, '')
      // Elimina [texto](url)
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Elimina ```código``` (bloques de código)
      .replace(/```[^`]*```/g, '')
      // Elimina `código` (código inline)
      .replace(/`([^`]+)`/g, '$1')
      // Elimina > (citas)
      .replace(/^\s*>\s/gm, '')
      // Elimina - o * (listas)
      .replace(/^\s*[-*]\s/gm, '')
      // Elimina números de listas ordenadas
      .replace(/^\s*\d+\.\s/gm, '')
      // Elimina líneas horizontales
      .replace(/^\s*[-*_]{3,}\s*$/gm, '')
      // Elimina espacios extra y líneas en blanco múltiples
      .replace(/\n\s*\n/g, '\n')
      .trim();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    document.addEventListener('openChatModal', handleOpenModal);
    
    
    const openAIChatBtn = document.getElementById('openAIChatBtn');
    if (openAIChatBtn) {
      openAIChatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setIsOpen(true);
      });
    }
    
    return () => {
      document.removeEventListener('openChatModal', handleOpenModal);
      if (openAIChatBtn) {
        openAIChatBtn.removeEventListener('click', handleOpenModal);
      }
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, {
      text: inputMessage,
      sender: 'user'
    }]);

    setIsLoading(true);

    try {
      const response = await fetch('https://ivanlunadev-ai.vercel.app/process-query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Erro na resposta do servidor');
      }

      const data = await response.json();

      setMessages(prev => [...prev, {
        text: cleanMarkdown(data.response), 
        sender: 'bot'
      }]);
    } catch (error) {
      console.error('Erro:', error);
      setMessages(prev => [...prev, {
        text: 'Desculpe, ocorreu um erro ao processar sua mensagem.',
        sender: 'bot'
      }]);
    } finally {
      setIsLoading(false);
      setInputMessage('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 dark:bg-black/80 transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-10 sm:inset-32 bg-white dark:bg-gray-900 rounded-lg shadow-xl flex flex-col">
        {/* Header */}
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Consultar a IA</h3>
          
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        {/* Messages */}
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <span style={{ fontFamily: 'Signika, sans-serif', fontWeight: 700 }}>
        Por favor, tenha em mente que esta funcionalidade é apenas para fins de demonstração, e a precisão da IA pode não ser sempre exata.
        </span>

        {messages.map((msg, idx) => (
        <div
            key={idx}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
            <div
            className={`max-w-[90%] rounded-lg p-3 ${
                msg.sender === 'user'
                ? 'bg-gray-800 text-white dark:bg-gray-700'
                : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
            }`}
            style={{ fontFamily: 'Signika, sans-serif', fontWeight: 700 }}
            >
            {msg.text}
            </div>
        </div>
        ))}
        {isLoading && (
        <div className="flex justify-start">
            <div
            className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-lg p-3"
            style={{ fontFamily: 'Signika, sans-serif', fontWeight: 700 }} 
            >
            Digitando...
            </div>
        </div>
        )}
        <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t dark:border-gray-700 p-4">
        <div className="flex space-x-4">
            <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Pergunte qualquer coisa sobre meu trabalho..."
            className="flex-1 border dark:border-gray-700 rounded-lg px-4 py-2 
                focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-500
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400"
            disabled={isLoading}
            />
            <button
            type="submit"
            className={`px-6 py-2 rounded-lg transition-colors ${
                isLoading
                ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                : 'bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white'
            }`}
            disabled={isLoading}
            >
            Enviar
            </button>
        </div>
        </form>

      </div>
    </div>
  );
};

export default ChatbotModal;
