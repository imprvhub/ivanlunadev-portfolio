---
title: "✨ AnalyzeMyDream [Astro.js - FastAPI]"
meta_title: "Iván Luna - Desenvolvedor de Software - AnalyzeMyDream"
date: 2024-10-10T05:00:00Z
image: "https://analyzemydream.com/preview.png"
categories: ["Astro.js", "FastAPI", "Flask", "Python", "Desenvolvimento Fullstack", "IA", "PayPal SDK", "API", "Auth", "PostgreSQL", "Turso"]
tags: ["analyzemydream"]
draft: false
---

AnalyzeMyDream é uma plataforma inovadora construída usando Astro.js, oferecendo interpretação de sonhos com IA para ajudar os usuários a obter insights mais profundos sobre seus sonhos. A plataforma se integra perfeitamente ao FastAPI, Flask e modelos avançados de IA, proporcionando análises rápidas e detalhadas. Os planos baseados em assinatura dão aos usuários acesso a recursos aprimorados, incluindo interpretações de sonhos mais personalizadas e aprofundadas. Também vem com uma API totalmente documentada, garantindo testes abrangentes e uma integração suave para desenvolvedores.

<br>
</div>
<div style="display: flex; justify-content: center; flex-wrap: wrap;">
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://br.analyzemydream.com', '_blank');">Demonstração ao Vivo</button>  
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/analyzemydream/', '_blank');">Código GitHub do Frontend</button>
<button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://br.analyzemydream.com/api', '_blank');">API docs</button>
</div>

#### Novidades:

<div align="center">

##### Anúncio de Lançamento: v1.3.0

###### Data de Lançamento: 23 de Setembro, 2024

O lançamento do **AnalyzeMyDream v1.3.0** já está **disponível**! Esta versão apresenta melhorias significativas, incluindo novos planos de assinatura, analisadores de sonhos avançados, gerenciamento de pagamento melhorado através do PayPal e uma interface de usuário reestruturada para uma melhor experiência. Para mais detalhes, consulte as [Notas de Lançamento v1.3.0](https://github.com/imprvhub/AnalyzeMyDream/releases/tag/v1.3.0).

</div>

---

- **Funcionalidades Gratuitas:**
  - **Artigos de Interpretação de Sonhos:** Baseados em conteúdo bibliográfico acadêmico.
  - **Fast-AI Dream Analyzer:** Interpretação rápida e geral disponível para todos os usuários.

  <div align="center">
    <img src="https://analyzemydream.com/changelog/changelog-01.png" alt="Guide GIF" style="width: 70%; height: auto; border-radius: 10px;">
</div>

- **Funcionalidades baseados em Assinatura:**
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

O projeto AnalyzeMyDream foi desenvolvido para um cliente, o que significa que o código diretamente relacionado aos aspectos que geram valor comercial não será compartilhado publicamente, em conformidade com as melhores práticas profissionais e os acordos firmados. No entanto, para promover a colaboração da comunidade, o código referente ao frontend será disponibilizado em um repositório público, permitindo contribuições que não comprometam a integridade do projeto nem os compromissos comerciais estabelecidos.

A participação no AnalyzeMyDream foi uma experiência crucial para o desenvolvimento profissional em backend, tanto em termos de habilidades técnicas quanto na resolução de desafios práticos. Um dos marcos mais importantes foi a implementação de autenticação de terceiros através do Google e GitHub utilizando OAuth2. Esta integração, combinada com o Turso Connect para uma gestão segura do banco de dados, permitiu a criação de logins sem senha, aumentando não apenas a segurança, mas também a experiência do usuário na plataforma. Além disso, a integração com o SDK do PayPal para a gestão de assinaturas desempenhou um papel fundamental. Esse sistema permitiu o desenvolvimento de um processo robusto para a atualização de planos premium de análise de sonhos, dando acesso a insights mais profundos e personalizados.

A arquitetura do AnalyzeMyDream, composta por três serviços backend independentes, apresentou tanto desafios quanto oportunidades de aprendizado valiosas. O FastAPI foi utilizado para as funcionalidades principais da API, enquanto um backend separado em Flask lidava com a geração e gestão de chaves de API, vinculando-as a planos de assinatura no PayPal. Um terceiro serviço, implementado em Node.js, gerenciava os webhooks do PayPal, automatizando a criação de assinaturas e a atribuição das respectivas chaves de API e planos com base em transações em tempo real. Esta estratégia baseada em microsserviços garante a escalabilidade do sistema e uma gestão eficiente das diferentes funcionalidades.

##### Aprendizados:
Este projeto forneceu lições fundamentais em arquitetura de sistemas, autenticação e gestão de assinaturas. A implementação do OAuth2 para Google e GitHub permitiu um entendimento mais profundo sobre fluxos de autenticação segura e sua integração com o Turso Connect, assegurando uma gestão eficiente de usuários e a integridade dos dados.

Além disso, a integração com o SDK do PayPal revelou as complexidades envolvidas no processamento de pagamentos em tempo real, na gestão de diferentes níveis de assinatura e na geração de chaves de API. A experiência de gerir três backends distintos — FastAPI para a API principal, Flask para a geração de chaves de API e Node.js para lidar com os webhooks do PayPal — proporcionou uma visão mais aprofundada sobre a arquitetura de microsserviços e como distribuir eficientemente a carga de trabalho entre serviços independentes. Essa abordagem modular permite uma clara separação de responsabilidades, tornando o sistema mais escalável e fácil de manter.

Em resumo, o AnalyzeMyDream foi essencial para o fortalecimento de competências em desenvolvimento full-stack, gestão de APIs e autenticação segura, além de aprofundar o conhecimento sobre processamento de pagamentos em tempo real e serviços baseados em assinaturas.

<hr>
<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Voltar para Início</button>
      <button class="btn btn-primary" onclick="window.location.href='/projetos';">Voltar para Projetos</button>     
</div>