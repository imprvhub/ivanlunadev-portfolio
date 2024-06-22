---
title: "🎬 Cinemathe [Vue.js - Django Rest Framework]"
meta_title: "Iván Luna - Desenvolvedor de Software - Cinemathe"
date: 2024-05-20T05:00:00Z
image: "/images/assets/cinemathe.png"
categories: ["Vue.js","Django Rest Framework", "Python", "Nuxt.js", "Desenvolvimento Fullstack","Auth","Implantação Netlify","Implantação Vercel", "Implementações", "Supabase"]
tags: ["cinemathe"]
draft: false
---

Uma aplicação web full-stack desenvolvida com Vue.js e Django Rest Framework que simplifica as escolhas de entretenimento. Ele fornece autenticação contínua para salvar favoritos, informações técnicas detalhadas para filmes e séries de TV com análises incluídas e compartilhamento de conteúdo em mídias sociais.

<br>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap; ">
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://cinemathe.space/', '_blank');">Demonstração</button>  
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/cinemathe/', '_blank');">Código Vue.js no GitHub</button>   
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/cinemathe-drf/', '_blank');">Código DRF no GitHub</button>   
</div>
<style>
@media screen and (max-width: 530px) {
  .btn {
    margin-right: 0;
    margin-bottom: 10px;
    max-width: 250px; 
  }
}
</style>

#### Novidades:

<div align="center">

##### Anuncio de Lanzamiento: v1.2.2

###### Fecha de Lanzamiento: 03 de Junio, 2024

¡El lanzamiento de Cinemathe v1.2.2 ya está disponible! Esta versión incluye varias características nuevas, correcciones de errores y mejoras para mejorar la experiencia general del usuario. Para más detalles, por favor consulta las [Notas de la Versión v1.2.2](https://github.com/imprvhub/cinemathe/releases/tag/v1.2.2).

</div>

---


- **Backend Python Integrado:** Cinemathe integra perfeitamente um backend Django Rest Framework para autenticação de usuário robusta, garantindo segurança aprimorada e controle de acesso através do Painel de Administração do Django.

<div align="center">
  <img src="/images/assets/guide1.gif" alt="Guia GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Gerenciamento Abrangente de Perfil de Usuário:** Os usuários desfrutam de controle total sobre seus perfis, com a capacidade de salvar filmes e séries de TV favoritos, personalizar suas preferências de entretenimento e acessar convenientemente as configurações da conta. A adição de um menu de perfil de usuário nas páginas principais e de perfil aprimora ainda mais a interação do usuário, fornecendo fácil acesso a opções de autenticação e personalização de conta, incluindo alterações de avatar.

<div align="center">
  <img src="/images/assets/guide2.gif" alt="Guia GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>


<div style="display: flex; justify-content: space-between;">
  <div style="flex: 1; margin-left: 10px;">
    <h4 style="font-size: 18px; max-width: 400px;">Compartilhamento de Mídias Sociais sem Esforço:</h4>
    <p style="max-width: 400px;">Cinemathe capacita os usuários a compartilhar seus filmes e séries de TV favoritos sem esforço em várias plataformas de mídia social, fomentando o engajamento e expandindo a comunidade.</p>
    <div>
      <img src="/images/assets/guide3.gif" alt="Guia GIF" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px;">
    </div>
  </div>

  <div style="flex: 1; margin-left: 10px;">
    <h4 style="font-size: 18px; max-width: 400px;">Avaliações de Usuários Impulsionadas pela Comunidade:</h4>
    <p style="max-width: 400px;">Os usuários podem explorar análises perspicazes para filmes e séries de TV específicos, facilitando o engajamento da comunidade e fornecendo feedback valioso de outros usuários.</p>
    <div>
      <img src="/images/assets/guide5.png" alt="Guia GIF" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px;">
    </div>
  </div>

</div>
<div style="display: flex; justify-content: space-between;">
  <div style="flex: 1; margin-right: 10px;">
    <h4 style="font-size: 18px; max-width: 400px;">Opções Extensivas de Fornecedores:</h4>
    <p style="max-width: 400px;">Com múltiplas opções de fornecedores disponíveis para cada filme e programa de TV, o Cinemathe informa os usuários sobre as plataformas de streaming onde podem acessar conteúdo específico.</p>
    <div>
      <img src="/images/assets/guide4.gif" alt="Guia GIF" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px;">
    </div>
  </div>

  <div style="flex: 1; margin-right: 10px;">
    <h4 style="font-size: 18px; max-width: 400px;">Descoberta Aprimorada de Conteúdo com Novos Carrosséis:</h4>
    <p style="max-width: 400px;">Introduzindo carrosséis intuitivos para diferentes categorias de filmes e programas de TV, o Cinemathe eleva a experiência de navegação e simplifica a descoberta de conteúdo para os usuários.</p>
    <div>
      <img src="/images/assets/guide6.png" alt="Guia PNG" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px;">
    </div>
  </div>

</div>
</div>


#### Instalação

##### Frontend Vue.js:
Para executar este projeto localmente, siga estas etapas:
  
1. Clone o repositório para sua máquina local:
```bash
git clone https://github.com/imprvhub/cinemathe.git
```
2. Instale as dependências necessárias:
```bash
yarn install
```
3. Antes de executar o projeto, você precisa configurar suas variáveis de ambiente em um arquivo .env. Aqui está como:
```bash
FRONTEND_URL=<Especifique o URL onde seu front -end será hospedado, por exemplo, 'https://localhost:3000' ou seu domínio personalizado.>
API_KEY=<Forneça sua chave de API do TMDB aqui>
SUPABASE_URL=<Digite o URL para o seu banco de dados, por exemplo, seu banco de dados Supabase URL>
SUPABASE_ANON_KEY=<Digite a chave anônima para o seu banco de dados, por exemplo, sua chave anônima supraBase>    
```
  Por padrão, o Cinemathe está configurado para trabalhar com o Supabase como o banco de dados de back -end DRF. No entanto, você pode usar outro banco de dados, se necessário. Basta substituir o Database_url e o Database_anon_key pelos valores apropriados com base na configuração do seu banco de dados.

4. Execute o projeto:
  ```bash
  yarn dev
  ```
  O projeto deve estar acessível em, por exemplo, 'http://localhost:3000'

<hr>

##### Django Rest Framework Backend:
Para configurar o backend da estrutura de DRF para cinemathe, siga estas etapas:

##### Requisitos anteriores:
[Python 3.9](https://www.python.org/downloads/release/python-390/)

1. Clone o repositório de backend à sua máquina local:
```bash
git clone https://github.com/imprvhub/cinemathe-drf.git
```

2. Instale dependências:
Navegue até o diretório do projeto e instale as dependências necessárias usando o PIP:
```bash
cd cinemathe-drf
pip install -r requirements.txt
```

3. Configure variáveis de entorno.
Crie um arquivo .env no diretório do projeto e defina as seguintes variáveis:
```bash
DB_NAME=<Digite o nome do seu banco de dados>
DB_USER=<Digite o nome de usuário do seu banco de dados>
DB_PASSWORD=<Digite a senha do seu banco de dados>
DB_HOST=<Digite o host do seu banco de dados, por exemplo, 'localhost'>
DB_PORT=<Digite a porta do seu banco de dados>
```

4. Aplique migrações
```bash
python manage.py collectstatic
```

5. Colete arquivos estáticos para implantação:
```bash
python manage.py collectstatic
```

6. Execute o servidor:
```bash
python manage.py runserver
```

#### Feedback:
Seu feedback é valioso! Se você encontrar algum problema ou tiver sugestões para melhorias, por favor, crie um novo problema no [repositório do GitHub](https://github.com/imprvhub/cinemathe/issues/new).

##### Funcionalidades e Correções Planejadas para v1.3.0:

-** Feat: Implementar Reestruturação Global para Melhorar a Experiência do Usuário.**
  Esta reestruturação tem como objetivo melhorar fundamentalmente a interação do usuário com a plataforma ao introduzir uma barra de navegação global coesa com recursos-chave como uma função de pesquisa, painel de usuário personalizado, seletor de idioma e um botão de retorno conveniente. Essas modificações são projetadas para simplificar a navegação e melhorar a usabilidade geral, resultando em uma experiência do usuário mais intuitiva e eficiente em toda a plataforma. [Changelog.](https://github.com/imprvhub/cinemathe/commit/da82b26f4b22ead0de49a673f02aba83e0f04747)

- **Feat: Página de Próximos Lançamentos**  
  Introduzir uma nova página de 'Próximos Lançamentos' projetada para destacar os próximos lançamentos de programas de TV e filmes, juntamente com as últimas notícias da indústria cinematográfica. Para usuários autenticados, o conteúdo será personalizado de acordo com suas preferências, garantindo que recebam atualizações adaptadas aos seus interesses.

- **Feat: Filtros de Pesquisa Avançada**  
  Implementar pesquisa avançada por ano, gênero e classificação. Este recurso melhorará a funcionalidade de pesquisa, permitindo que os usuários filtrem suas consultas de pesquisa com mais precisão. Os usuários poderão pesquisar por anos específicos, gêneros e classificações, facilitando encontrar exatamente o que estão procurando. [Changelog.](https://github.com/imprvhub/cinemathe/commit/ec436b5c5772836a3332506ffb0804b479061ab9)

- **Feat: Exclusão de Favoritos em Tempo Real**  
  Exclusão ao vivo de favoritos na página de perfil. Os usuários poderão excluir seus favoritos em tempo real diretamente da sua página de perfil, proporcionando uma experiência mais fluida e interativa. [Changelog.](https://github.com/imprvhub/cinemathe/commit/c0f81dfb455e345522eb1092dd5dce212822446a)

- **Feat: Adicionar link do Letterboxd aos Detalhes do Filme**  
  Esta funcionalidade adiciona um link do Letterboxd à página de detalhes do filme. O link é exibido condicionalmente com base no tipo de conteúdo; é visível apenas para filmes e não para séries de TV. Essa diferenciação é feita porque o Letterboxd suporta exclusivamente filmes, não séries de TV. [Changelog.](https://github.com/imprvhub/cinemathe/commit/fa1ffadb354fc7eeac0754ad8e465e00c9073eb0)

- **Feat: Agregar enlace a Trakt TV en Detalles de Películas y Series de TV**  
  Esta función agrega un enlace a Trakt TV en la página de detalles de películas y series de TV. [Changelog.](https://github.com/imprvhub/cinemathe/commit/40b47b551998d1995172edcabbfc57a2d5fd633b)

- **Fix: Problema de Exibição do Nome no Perfil**  
  Resolver um problema onde o nome do perfil não é exibido no primeiro lançamento. Esta correção garantirá que o nome do perfil seja exibido corretamente quando um usuário acessar seu perfil pela primeira vez. [Changelog.](https://github.com/imprvhub/cinemathe/commit/1bddc978def7a5d02c861fb5c81b0736cd90512a)

- **Fix: Responsividade do Menu de Favoritos**  
  Melhorar a responsividade do menu da coleção de favoritos na página de perfil para resoluções maiores que 600px. Esta correção melhorará o layout e a usabilidade do menu de favoritos em telas maiores. [Changelog.](https://github.com/imprvhub/cinemathe/commit/5f518c99e227a79290fa2a42b31679ed23d0bfdb)

- **Fix: Classificações com Estrelas no Perfil**  
  Integre ícones de estrela na seção de avaliações de usuário de profile/index.vue. Esta melhoria mostrará visualmente as avaliações dos usuários usando estrelas, oferecendo uma representação mais clara e intuitiva das avaliações. [Changelog.](https://github.com/imprvhub/cinemathe/commit/7475c00b4d9b40841c730da397e0f40a773c9eea)

- **Fix: Mover o Seletor de Idioma para o Topo**
  Mova o Seletor de Idioma do rodapé para a parte superior da página. Essa mudança o tornará mais visível para todos os usuários e melhorará a experiência do usuário. [Changelog.](https://github.com/imprvhub/cinemathe/commit/46450650d3b44c72ded83d559abe0f09b2765049)



#### Atribuições

A inspiração fundamental para este projeto é derivada do repositório [TasteJS](https://github.com/tastejs/nuxt-movies), e estendo minha gratidão pelo seu trabalho pioneiro.

Os dados sobre filmes e programas de TV são obtidos do [TMDB](https://www.themoviedb.org/), enquanto as informações sobre provedores de streaming, redes e plataformas são obtidas do [JustWatch](https://www.justwatch.com/).

Para mais detalhes, consulte estes [Termos e Condições](https://cinemathe.space/terms/).

#### Conclusão:

##### Conquistas:
- **Integração Sinérgica:** Integrei com sucesso Vue.js e Django Rest Framework, duas tecnologias menos comumente combinadas, isso me apresentou um desafio intrigante. Apesar da minha experiência anterior com Django, mesclá-lo com Vue.js exigiu solução de problemas cuidadosa e adaptabilidade. Eu superei com sucesso obstáculos encontrados durante a implementação da autenticação de usuário do Django.

- **Integração Simplificada de UX/UI e Gerenciamento de Dados:** Consegui lidar com as complexidades do design UX/UI, abrangendo o gerenciamento de diversos componentes globais e dinâmicos, integração de API, transmissão de dados sem problemas entre frameworks e experiência e autenticação de usuário robustas. Apesar das complexidades iniciais, esforço diligente e melhorias incrementais pavimentaram o caminho para uma navegação habilidosa por esses desafios.

##### Aprendizagens:
- **Melhorias Através da Perseverança:** Este projeto me permitiu mergulhar ainda mais no mundo do Vue.js. Apenas três meses atrás, enfrentar a implementação do Vue.js parecia assustador devido à sua complexidade. No entanto, graças ao esforço diário e constante, assim como à minha perseverança, não só consegui entender a lógica subjacente necessária, mas também superei minhas expectativas iniciais. Esta experiência não só me motivou a explorar novas possibilidades, mas também me impulsionou a implementar funcionalidades que anteriormente considerava fora do meu alcance, especialmente no âmbito do frontend.
Este projeto consolidou minha perseverança e meu compromisso com o aprendizado contínuo. A dedicação constante a este projeto não só fortaleceu minha confiança, mas também expandiu significativamente meu conjunto de habilidades. Desde o início do processo de planejamento até a conclusão bem-sucedida do projeto, esta jornada destaca como a perseverança e o esforço dedicado podem transformar tanto o crescimento pessoal quanto o profissional.


<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Voltar para a Página Inicial</button>
      <button class="btn btn-primary" onclick="window.location.href='/projects';">Voltar para os Projetos</button>     
</div>
