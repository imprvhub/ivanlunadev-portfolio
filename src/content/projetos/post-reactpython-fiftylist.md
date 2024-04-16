---
title: "🎧 Fifty List v2 [React y Python]"
meta_title: "Iván Luna - Desenvolvedor de Software - Fifty List"
description: ""
date: 2024-01-07T05:00:00Z
image: "/images/assets/fifty-list.png"
categories: ["React.js","Python","Flask","Desenvolvimento Fullstack","Google Cloud Storage","PostgreSQL", "Supabase", "Implantação Vercel"]
---

Este projeto é uma plataforma fullstack de automação musical e apresenta uma integração perfeita de React e Python.

<br>
<div style="display: flex; justify-content: center; flex-wrap: wrap; ">
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://fiftylist.vercel.app', '_blank');">Demonstração ao vivo</button>  
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/fiftylist-react-v2/', '_blank');">Código do Github React</button>
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/fiftylist-python-v2/', '_blank');">Código do Github Python</button>   
</div>

<style>
@media screen and (max-width: 530px) {
  .btn {
    margin-right: 0;
    margin-bottom: 10px;
    width: calc(100% - 20px); 
    max-width: 250px; 
  }
}
</style>

#### Principais Recursos:

##### Front-end (React.js)
- Integração com Spotify: busca suas 50 melhores faixas do Spotify dentro de um período escolhido (1, 6 meses ou clássicos de todos os tempos).
- Exportar para Playlist (Resultados): Gera automaticamente uma nova playlist em sua conta Spotify com essas 50 faixas.
- Exportar para lista de reprodução (recomendações): com base nas 50 músicas mais ouvidas, nosso mecanismo de recomendação sugere 20 músicas adicionais para adicionar às suas listas de reprodução.

##### Back-end (Python)
- Flask-Powered: atua como um middleware que faz interface com o React.
- Fifty Card: organiza faixas recuperadas dinamicamente em um novo site estático para fornecer funcionalidade de compartilhamento nas mídias sociais ou para acesso posterior, incluindo nomes de artistas, títulos de músicas, nomes de álbuns, datas de lançamento e gêneros.

#### Sobre o projeto

FiftyList é um projeto exploratório que se aprofunda na colaboração de diferentes linguagens de programação e APIs. Ele foi projetado para:
- Demonstrar comunicação perfeita: mostra uma comunicação tranquila entre o front-end e o back-end usando chamadas de API.
- Enfatizar a sinergia da linguagem: destaca a sinergia entre as proezas de front-end do React e a eficiência de back-end do Python.
- Desafio de apresentação de dados: Garante que dados complexos sejam renderizados em um formato amigável e transmitidos de forma eficaz entre sistemas.

#### Instalação e Uso:

##### Para Instalação do Frontend:
1. Clone este projeto.
 ```bash
git clone https://github.com/imprvhub/fiftylist-react-v2.git

```
2. Navegue até o diretório do projeto (no seu terminal IDE).
```bash
cd /your/folder/directory/fiftylist-react-v2
```
3. Execute o seguinte comando para instalar todas as dependências necessárias.
```bash
npm install
```
4. Substitua as variáveis de ambiente (`REACT_APP_SCOPES`, `REACT_APP_REDIRECT_URI`, `REACT_APP_CLIENT_SECRET`, `REACT_APP_CLIENT_ID`) com as suas próprias. Você pode gerar essas variáveis no Painel de Desenvolvedor do Spotify.
5. Substitua a variável definida no início do código em `App.js`:
   `const redirectUri = 'https://fiftylist.vercel.app/callback';` por -> `const redirectUri = "http://localhost:3000/callback";`
   Atualize as URLs nas variáveis da função `exportShare` de `'https://fiftylistbackend.vercel.app/share'` para `'http://localhost:5000/share'` se o seu backend Python estiver usando uma porta diferente.
6. Execute o seguinte comando do seu terminal IDE; isso deve iniciar o frontend na porta designada.

```bash
npm start
```

##### Para Instalação do Backend:
##### Pré-requisitos:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

1. Clone o projeto. ( https://github.com/imprvhub/fiftylist-python-v2 )
 ```bash
git clone https://github.com/imprvhub/fiftylist-python-v2.git
```

1.2 Navegue até o diretório do projeto (no seu terminal IDE).
```bash
cd /your/folder/directory/fiftylist-python-v2
```
2. Execute o seguinte comando para instalar todas as dependências necessárias.
```bash
pip3 install -r requirements.txt
```
3. Substitua a variável definida no início do código de share.py: `cors = CORS(app, resources={r"/share": {"origins": "https://fiftylist-frontend.vercel.app/"}})` por ->  `cors = CORS(app, resources={r"/share": {"origins": "http://localhost:3000/"}})` (ou a porta que você designou para o seu frontend).
4. Execute `python3 share.py`.
   
IMPORTANTE: Abra duas janelas separadas no seu IDE para executar o fullstack localmente. Execute os comandos para ter ambos os projetos em execução simultaneamente para que funcionem perfeitamente juntos.

#### Feedback e suporte:
Sua opinião é importante e estou pronto para ajudar a responder a quaisquer dúvidas ou comentários que você possa ter. Suas contribuições são essenciais para refinar o projeto e melhorar a experiência geral do usuário. Não hesite em entrar em contato comigo:

Sinta-se à vontade para compartilhar seus insights, recomendações ou sugestões para melhoria contínua. Se você encontrar algum desafio ou precisar de ajuda, [crie um novo problema no GitHub](https://github.com/imprvhub/fiftylist-react-v2/issues/new). Certifique-se de fornecer uma descrição detalhada do seu problema para facilitar um suporte rápido e preciso.

#### Licença:
Para mais informações sobre este tópico, leia os [Termos e Condições](https://fiftylist.vercel.app/html/termsandconditions.html) deste projeto.

<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Voltar ao Início</button>
      <button class="btn btn-primary" onclick="window.location.href='/projetos';">Voltar para Projetos</button>     
</div>

---
