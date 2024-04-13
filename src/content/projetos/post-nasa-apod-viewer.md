---
title: "🪐Nasa Apod Viewer [Python - Flask]"
meta_title: "Iván Luna - Desenvolvedor de Software - Nasa APOD Viewer"
date: 2024-02-25T05:00:00Z
image: "/images/assets/nasa-apod-viewer.png"
categories: ["Python","Flask","PostgreSQL","Supabase","Desenvolvimento Backend","Implantação no Vercel"]
tags: ["nasa-apod-viewer"]
draft: false
---

Uma aplicação web Python para buscar a Imagem Astronômica do Dia da NASA, compartilhável como cartões APOD.

#### Demonstração Ao Vivo: [apod-nasa-viewer.vercel.app](https://apod-nasa-viewer.vercel.app)

#### Sobre o projeto:

Este projeto é uma aplicação web Python construída com Flask. Busca a Imagem Astronômica do Dia (APOD) da API da NASA e fornece funcionalidades para visualizar e compartilhar as imagens como cartões APOD. Para mais informações você pode visitar o [repositório GitHub](https://github.com/imprvhub/nasa-apod-viewer).

#### Recursos:

- Busca a Imagem Astronômica do Dia da API da NASA.
- Permite aos usuários explorar imagens APOD através de uma navegação por calendário ou buscando datas específicas.
- Inclui uma opção de 'Embaralhar' que seleciona aleatoriamente para usuários que não estão certos sobre qual data explorar.
- Apresenta uma seleção curada das melhores imagens APOD desde 1995 (o ano de início do APOD) até o presente através da seção 'Recomendações destacadas da NASA APOD por ano'.
- Gera cartões APOD compartilháveis contendo a imagem, título e descrição recuperados.
- **Integração com o YouTube (novo recurso):** Os usuários agora podem assistir a vídeos APOD diretamente na interface do aplicativo. Eles também podem compartilhar esses vídeos do YouTube como cartões APOD, expandindo a funcionalidade de compartilhamento do aplicativo. Com esse aprimoramento, os usuários podem facilmente divulgar suas descobertas astronômicas favoritas.

#### Índice:

- [Sobre o projeto](#sobre-o-projeto)
- [Recursos](#recursos)
- [Instalação](#instalação)
- [Feedback](#feedback)
- [Licença](#licença)
- [Conclusão](#conclusão)

#### Instalação:

Para executar este projeto localmente, siga estes passos:

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/imprvhub/nasa-apod-viewer.git
   ```

2. Instale as dependências necessárias:

    ```bash
   pip install -r requirements.txt
   ```

3. Configure as variáveis de ambiente. Certifique-se de ter um arquivo .env com as seguintes variáveis:

     ```bash
    NASA_API_KEY: Your NASA API key.
    DATABASE_HOST: Hostname of your database.
    DATABASE_USERNAME: Username for database access.
    DATABASE_PASSWORD: Password for database access.
    DATABASE: Name of the database.
   ```

4. Execute a aplicação Flask:
    ```bash
   cd api
   python3 index.py
   ```

#### Feedback:

Seu feedback é valioso! Se encontrar algum problema ou tiver sugestões de melhorias, por favor crie uma nova [issue no GitHub](https://github.com/imprvhub/nasa-apod-viewer/issues/new) neste repositório.

#### Licença:

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://github.com/imprvhub/nasa-apod-viewer/blob/main/LICENSE.md) para detalhes.

#### Conclusão:

##### Conquistas

- **Gestão Eficiente de Fluxos de Trabalho e Scripts Complexos:** Lidar eficientemente com o intricado fluxo de trabalho envolvendo múltiplas execuções de scripts para facilitar a interação do usuário e oferecer várias opções, como randomização, seleção de data e geração de cartões APOD, foi o principal desafio abordado neste projeto. Garantir os resultados desejados após cada execução de script e interação foi particularmente gratificante. Isso exigiu orquestrar uma sequência de chamadas de API para atualizar dinamicamente o APOD com base nas interações do usuário, cada uma servindo propósitos distintos. A atenção aos detalhes e os testes abrangentes foram essenciais para garantir uma funcionalidade perfeita ao longo do processo.

##### Aprendizados

- **Melhoria da Interação Frontend-Backend:** Obtive insights sobre como alcançar uma melhor interação entre os scripts frontend e os processos backend Python. Anteriormente, minha abordagem estava limitada a transmitir dados específicos e processá-los. No entanto, este projeto exigiu estabelecer uma troca contínua de dados entre o frontend e o backend devido aos numerosos scripts e interações dentro da aplicação web. Foi uma experiência de aprendizado valiosa.

---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Voltar para o Início</button>
      <button class="btn btn-primary" onclick="window.location.href='/projetos';">Voltar para Projetos</button>     
</div>

---
