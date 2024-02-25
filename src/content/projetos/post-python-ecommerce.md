---
title: "📈 E-commerce Data Analysis (Python)."
meta_title: "Iván Luna - Desenvolvedor de Software - E-commerce Data Analysis"
description: ""
date: 2024-01-03T05:00:00Z
image: "/images/assets/ecommerce-data-analysis.png"
categories: ["Python","SQL","Soluções","Implementações","Implantação Azure"]
tags: ["ecommerce-data-analysis","flask","gunicorn"]
draft: false
---

### Bem-vind@s ao Projeto [Análise de Dados de E-commerce](https://ecommerce-data-analysis.azurewebsites.net/).
Esta implementação destaca e fornece uma análise abrangente de dados de e-commerce de dois projetos Next.js diferentes. Utilizando Python (Framework Flask) com Gunicorn e Implantação Azure. Para insights detalhados, visite o [Repositório no Github](https://github.com/imprvhub/ecommerce_data_analysis/).

### Demonstração Ao Vivo:
https://ecommerce-data-analysis.azurewebsites.net/

### Tutorial:
<div style="text-align: center;">
  <iframe width="100%" height="600" src="https://www.youtube.com/embed/jNLWl_Nu3KE" frameborder="0" allowfullscreen style="margin: auto;"></iframe>
</div>

### Principais Recursos:
1. <ins>**Obtenha Dados como um Super Admin:**<ins>

   Obtenha dados abrangentes de gerentes de loja, incluindo informações sobre suas lojas, produtos, vendas concluídas ou pendentes e clientes.

2. <ins>**Renderização Comparativa de Insights Analíticos:**<ins>

   Renderize e compare os dados adquiridos, fornecendo insights analíticos por meio de tabelas, gráficos do Plotly Express e visualizações do Matplotlib.

3. <ins>**Dashboard Dinâmico:**<ins>

   Acesse um painel dinâmico que permite monitoramento e análise em tempo real das métricas de e-commerce.

4. <ins>**Interface Amigável:**<ins>

   Navegue por uma interface amigável projetada para facilitar o uso e a exploração eficiente de dados.

### Pré-requisitos:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

### Instalação e Execução Local

#### 1. Clone os Projetos 'Code With Antonio'. 
Para que esta implementação funcione corretamente, você deve clonar e configurar o [ecommerce-admin](https://github.com/antonioerdeljac/next13-ecommerce-admin) (em primeiro lugar) e depois os projetos [ecommerce-store](https://github.com/antonioerdeljac/next13-ecommerce-store) de 'Code With Antonio'. Para um tutorial detalhado, visite: [Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023](https://www.youtube.com/watch?v=5miHyP6lExg).

AVISO LEGAL: Certifique-se de criar uma loja funcional no ecommerce-admin com produtos que possam ser visualizados no ecommerce-store do lado do cliente. Lembre-se de que os pagamentos feitos na demonstração são simulados e usam dados genéricos, seguindo as práticas recomendadas da [Stripe Docs](https://stripe.com/docs/testing ). Se você já configurou a gestão de pagamentos de acordo com sua região, então pule a simulação. É recomendável não pular esta etapa, a menos que você tenha certeza e assuma a responsabilidade pelas respectivas movimentações ou transações que você gera. Este projeto é puramente demonstrativo para mostrar como funciona uma implementação Python. Não somos responsáveis por mal-entendidos ou má gestão. Para mais informações: [Clique aqui](https://ecommerce-data-analysis.azurewebsites.net/user_agreements.html).

#### 2. Clone o repositório de implementação
```bash
git clone https://github.com/ivnimprv/ecommerce_data_analysis.git

```
#### 2.1 Navegue até o diretório do projeto
```bash
cd /your/folder/directory/ecomerce_data_analysis
```
#### 3. Instale as Dependências
```bash
pip install -r requirements.txt
```
#### 4. Inicie a aplicação localmente
```bash
python3 app.py
```
The application should now be accessible at http://localhost:8000.

### Conclusão:

### Problemas conhecidos:

- **Latência de desempenho:** Ocasionalmente, altas cargas de instância do Azure resultam em latência significativa. Para resolver isso, pretendo migrar o projeto para uma plataforma diferente no futuro, melhorando assim o desempenho.

#### Conquistas

- **Integração Bem-sucedida de Dados do Next.js:** Consegui a implementação do Python, combinando efetivamente dados extraídos de dois projetos Next.js.

#### Aprendizados

- **Estreia na Implantação Azure:** Este projeto marcou minha primeira implantação no Azure. Embora eu tivesse experiência anterior com Render, Vercel e Netlify, configurar minha aplicação Python, alimentada pelo Gunicorn, para rodar eficientemente no Azure apresentou um desafio único.

#### Planos Futuros

- **Melhorias Interativas:** No futuro, aspiramos implementar interatividade aos gráficos e análises, aprimorando a experiência geral do usuário.

#### Agradecimientos

- **Agradecimentos Especiais ao Code With Antonio:** Expressando minha gratidão por inspirar com projetos fundamentais e tornar possível esta implementação.


---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Voltar ao Início</button>
      <button class="btn btn-primary" onclick="window.location.href='/projetos';">Voltar para Projetos</button>     
</div>

---
