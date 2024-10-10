---
title: "✨ AnalyzeMyDream [Astro.js - FastAPI - IA - Paypal SDK]"
meta_title: "Iván Luna - Desenvolvedor de Software - AnalyzeMyDream"
date: 2024-10-10T05:00:00Z
image: "https://analyzemydream.com/preview.png"
categories: ["Astro.js", "FastAPI", "Flask", "Desenvolvimento Fullstack", "IA", "PayPal SDK", "API", "Auth", "PostgreSQL", "Turso","Google Passwordless Auth", "Github Passwordless Auth"]
tags: ["analyzemydream"]
draft: false
---

AnalyzeMyDream é uma plataforma inovadora construída usando Astro.js, oferecendo interpretação de sonhos com IA para ajudar os usuários a obter insights mais profundos sobre seus sonhos. A plataforma se integra perfeitamente ao FastAPI, Flask e modelos avançados de IA, proporcionando análises rápidas e detalhadas. Os planos baseados em assinatura dão aos usuários acesso a recursos aprimorados, incluindo interpretações de sonhos mais personalizadas e aprofundadas. Também vem com uma API totalmente documentada, garantindo testes abrangentes e uma integração suave para desenvolvedores.

<br>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://analyzemydream.com', '_blank');">Demonstração ao Vivo</button>  
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/analyzemydream/', '_blank');">Código GitHub do Frontend</button>
</div>

#### Novidades:

<div align="center">

##### Anúncio de Lançamento: v1.3.0

###### Data de Lançamento: 23 de Setembro, 2024

O lançamento do **AnalyzeMyDream v1.3.0** já está **disponível**! Esta versão apresenta melhorias significativas, incluindo novos planos de assinatura, analisadores de sonhos avançados, gerenciamento de pagamento melhorado através do PayPal e uma interface de usuário reestruturada para uma melhor experiência. Para mais detalhes, consulte as [Notas de Lançamento v1.3.0](https://github.com/imprvhub/AnalyzeMyDream/releases/tag/v1.3.0).

</div>

---

- **Recursos Principais:**
  - **Analisador de Sonhos Fast-AI:** Interpretação rápida e geral disponível para todos os usuários.
  <div align="center">
    <img src="https://analyzemydream.com/changelog/changelog-01.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Recursos baseados em Assinatura:**
 - **Analisador de Sonhos Advanced-AI:** Oferece análises de sonhos mais profundas e com base em pesquisa.
 - **Analisador de Sonhos Custom-AI:** Permite que os usuários personalizem a análise dos sonhos de acordo com seus parâmetros preferidos.
 - **Analisador de Sonhos Comparativo-AI:** Compara duas descrições de sonhos para identificar padrões.
 - **Analisador de Sonhos Batch-AI:** Analisa múltiplos sonhos em uma sessão, proporcionando uma visão holística.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog-02.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Gerenciamento Seguro de Assinaturas pelo PayPal:** Inclui planos de assinatura Básico, Padrão e Premium com uma opção de teste de 7 dias para o plano Básico.
- **Autenticação Sem Senha:** Os usuários podem entrar usando contas do Google ou GitHub.
- **Gerenciamento de Chaves de API:** Alimentado por um backend baseado em Flask para criar e gerenciar chaves de API através do painel do usuário.
- **API para Desenvolvedores:** Uma API abrangente com documentação detalhada e capacidades de teste, permitindo que os desenvolvedores integrem os recursos de análise de sonhos da plataforma em suas próprias aplicações. As chaves de API são geradas com base nos planos de assinatura, com diferentes níveis desbloqueando funcionalidades específicas.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog-04.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Frontend Responsivo:** Construído com Astro.js para uma experiência de usuário perfeita em desktop e mobile.
- **Suporte Multilíngue:** Fornecendo interpretações de sonhos em vários idiomas para alcançar um público mais amplo.

<div align="center">
  <img src="https://analyzemydream.com/changelog/changelog_03.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

---


#### Instalação

##### Frontend de Astro.js:
Para executar este projeto localmente, siga estes passos:

1. Clone o repositório:  
```bash
git clone https://github.com/imprvhub/analyzemydream.git
```
2. Instale as dependências necessárias:
```bash
npm install
```
3. Antes de executar o projeto, você precisa configurar suas variáveis de ambiente em um arquivo .env. Veja como:  
```bash
GOOGLE_AUTH_CLIENT: O ID do cliente fornecido pelo Google para autenticação OAuth2.
GOOGLE_AUTH_SECRET: O segredo do cliente fornecido pelo Google para gerenciar a autenticação do usuário de forma segura.
GOOGLE_AUTH_CALLBACK_URL: A URL para a qual o Google redireciona os usuários após uma autenticação bem-sucedida.
GITHUB_AUTH_CLIENT: O ID do cliente fornecido pelo GitHub para autenticação OAuth2.
GITHUB_AUTH_SECRET: O segredo do cliente fornecido pelo GitHub para gerenciar a autenticação de forma segura.
GITHUB_AUTH_CALLBACK_URL: A URL para a qual o GitHub redireciona os usuários após a autenticação.
DB_URL: A URL para acessar o banco de dados, incluindo o host e os detalhes de conexão.
DB_TOKEN: O token ou chave utilizada para autenticar e conectar-se de forma segura ao banco de dados.  
```
4. Execute o projeto:  
  ```bash
  npm run dev
  ```
  O projeto deve estar acessível em, por exemplo, 'http://localhost:4321'.


#### Conclusão:

##### Esclarecimento sobre a Disponibilidade do Código

O projeto **AnalyzeMyDream** foi desenvolvido como um pedido de um cliente, o que implica que as funcionalidades pagas e o código associado a elas não serão disponibilizados publicamente, pois isso não seria uma boa prática profissional. No entanto, o repositório e o código do frontend serão compartilhados publicamente, permitindo que a comunidade contribua sem comprometer a integridade do projeto e os acordos comerciais.

---

Participar do AnalyzeMyDream foi uma experiência fundamental para meu crescimento profissional, tanto em termos técnicos quanto na resolução de desafios práticos. Um dos marcos mais significativos foi a implementação da autenticação de terceiros através do Google e GitHub utilizando OAuth2. Essa integração, juntamente com Turso Connect para uma gestão segura do banco de dados, permitiu que os usuários fizessem login sem senha, o que não apenas melhorou a segurança, mas também otimizou a experiência do usuário na plataforma. Além disso, a integração do SDK do PayPal para gerenciar assinaturas foi crucial. Isso permitiu estabelecer um sistema robusto que facilita a atualização dos usuários para planos avançados de análise de sonhos, concedendo acesso a percepções mais profundas.

A arquitetura do AnalyzeMyDream, composta por três serviços backend distintos, apresentou tanto um desafio quanto uma grande oportunidade de aprendizado. Utilizamos FastAPI para as funcionalidades principais da API, enquanto um backend separado em Flask se encarrega da geração e gestão de chaves API, atribuindo-as a planos específicos de assinatura no PayPal. Um terceiro serviço em Node.js cuida dos webhooks do PayPal, criando automaticamente assinaturas e atribuindo aos usuários suas respectivas chaves API e planos com base em dados de transação em tempo real. Essa estratégia de microserviços garante a escalabilidade do sistema e uma gestão eficiente das distintas funcionalidades.

##### Aprendizados:
Este projeto me proporcionou lições chave sobre arquitetura de sistemas, autenticação e gestão de assinaturas. A implementação do OAuth2 para Google e GitHub me permitiu aprofundar nos fluxos de autenticação seguros e em como integrá-los com Turso Connect, garantindo uma gestão de usuários fluida e uma sólida integridade de dados.

Além disso, a integração do SDK do PayPal me expôs às complexidades do processamento de pagamentos em tempo real, a gestão de níveis de assinatura e a geração de chaves API. Ao gerenciar três sistemas backend diferentes — FastAPI para a API principal, Flask para a geração de chaves API e Node.js para lidar com os webhooks do PayPal — adquiri uma compreensão mais profunda da arquitetura de microserviços e da distribuição eficaz de cargas de trabalho entre os diferentes serviços. Essa configuração modular permitiu uma clara separação de responsabilidades, tornando o sistema mais escalável e fácil de manter.

Em suma, o AnalyzeMyDream foi fundamental para fortalecer minhas habilidades em desenvolvimento full-stack, gestão de APIs e autenticação segura, além de aprofundar meu conhecimento sobre processamento de pagamentos em tempo real e serviços baseados em assinaturas.


<hr>
<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Voltar para Início</button>
      <button class="btn btn-primary" onclick="window.location.href='/projetos';">Voltar para Projetos</button>     
</div>