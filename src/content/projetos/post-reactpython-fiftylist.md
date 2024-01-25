---
title: "🎧 Fifty List - Uma Plataforma de Automação Musical React/Python."
meta_title: "Iván Luna - Desenvolvedor de Software - Fifty List"
description: ""
date: 2024-01-07T05:00:00Z
image: "/images/fifty-list.png"
categories: ["React.js","Python","Desenvolvimento","Implantação Vercel"]
tags: ["fifty-list","flask","react"]
draft: false
---

#### Bem-vind@s ao [Fifty List - Buscando Suas 50 Melhores Músicas.](https://fiftylist.vercel.app/)

Este projeto faz parte do meu portfólio apresentado em [ivanluna.dev](https://ivanluna.dev) e demonstra uma integração sofisticada de React e Python usando **_Spotify e Todoist API_**. Para insights detalhados, visite o [Repositório Fifty List React no Github](https://github.com/imprvhub/fiftylist-react/) e o [Repositório Fifty List Python no Github](https://github.com/imprvhub/fiftylist-python/).

#### Demonstração Ao Vivo:
https://fiftylist.vercel.app/

#### Principais Recursos:

##### Componente React
- Integração com o Spotify: Busca suas 50 principais faixas do Spotify dentro de um período escolhido (1, 6 meses ou clássicos de todos os tempos).
- Criação de Playlists: Gera automaticamente uma nova playlist em sua conta do Spotify com essas faixas.
- Criação de Listas de Recomendações: Com base nas suas 50 músicas mais ouvidas, nosso mecanismo de recomendação sugere mais 20 músicas para adicionar às suas playlists.

##### Componente Python
- Alimentado por Flask: Age como um middleware que interage entre React e Todoist.
- Gerenciamento de Tarefas: Organiza detalhes das faixas em tarefas no Todoist, incluindo nomes de artistas, títulos de músicas, nomes de álbuns, datas de lançamento e gêneros.

#### Sobre o Projeto:

O FiftyList é um projeto exploratório que mergulha fundo na colaboração de diferentes linguagens de programação e APIs. Ele é projetado para:
- Demonstração de Comunicação Perfeita: Mostra uma comunicação suave entre o frontend e o backend usando chamadas de API.
- Ênfase na Sinergia de Linguagens: Destaca a sinergia entre a destreza do frontend do React e a eficiência do backend do Python.
- Desafio de Apresentação de Dados: Garante que dados complexos sejam renderizados em um formato amigável ao usuário e transmitidos efetivamente entre sistemas.

#### Instalação e Uso:

##### Para Instalação do Frontend:
1. Clone este projeto.
 ```bash
git clone https://github.com/imprvhub/fiftylist-react.git

```
2. Navegue até o diretório do projeto (no seu terminal IDE).
```bash
cd /your/folder/directory/fiftylist-react
```
3. Execute o seguinte comando para instalar todas as dependências necessárias.
```bash
npm install
```
4. Substitua as variáveis de ambiente (`REACT_APP_SCOPES`, `REACT_APP_REDIRECT_URI`, `REACT_APP_CLIENT_SECRET`, `REACT_APP_CLIENT_ID`) com as suas próprias. Você pode gerar essas variáveis no Painel de Desenvolvedor do Spotify.
5. Substitua a variável definida no início do código em `App.js`:
   `const redirectUri = 'https://fiftylist.vercel.app/callback';` por -> `const redirectUri = "http://localhost:3000/callback";`
   Atualize as URLs nas variáveis da função `exportTodoist` de `'https://fiftylistbackend.vercel.app/todoist'` para `'http://localhost:5000/todoist'` se o seu backend Python estiver usando uma porta diferente.
6. Execute o seguinte comando do seu terminal IDE; isso deve iniciar o frontend na porta designada.
```bash
npm start
```

##### Para Instalação do Backend:
##### Pré-requisitos:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

1. Clone o projeto. ( https://github.com/imprvhub/fiftylist-python )
 ```bash
git clone https://github.com/imprvhub/fiftylist-python.git
```

1.2 Navegue até o diretório do projeto (no seu terminal IDE).
```bash
cd /your/folder/directory/fiftylist-python
```
2. Execute o seguinte comando para instalar todas as dependências necessárias.
```bash
pip install -r requirements.txt
```
3. Substitua a variável definida no início do código de todoist.py: `cors = CORS(app, resources={r"/todoist": {"origins": "https://fiftylist-frontend.vercel.app/"}})` por ->  `cors = CORS(app, resources={r"/todoist": {"origins": "http://localhost:3000/"}})` (ou a porta que você designou para o seu frontend).
4. Execute `python3 todoist.py`.
   
IMPORTANTE: Abra duas janelas separadas no seu IDE para executar o fullstack localmente. Execute os comandos para ter ambos os projetos em execução simultaneamente para que funcionem perfeitamente juntos.

#### Contribuindo

Recebemos contribuições para o projeto FiftyList. Se você tiver sugestões ou melhorias, sinta-se à vontade para nos contatar em contact@ivanluna.dev.

---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Voltar ao Início</button>
      <button class="btn btn-primary" onclick="window.location.href='/projetos';">Voltar para Projetos</button>     
</div>

---
