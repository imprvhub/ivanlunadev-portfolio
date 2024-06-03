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
