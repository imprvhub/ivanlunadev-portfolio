---
title: "📈 E-commerce Data Analysis [Python-Next.js]"
meta_title: "Iván Luna - Desenvolvedor de Software - E-commerce Data Analysis"
description: ""
date: 2024-01-03T05:00:00Z
image: "/images/assets/ecommerce-data-analysis.png"
categories: ["Python","Flask","Next.js","Data Analysis","MySQL","PlanetScale","Soluções","Implementações","Implantação Azure"]
tags: ["ecommerce-data-analysis"]
draft: false
---

Esta implementação destaca e fornece uma análise abrangente de dados de e-commerce de dois projetos Next.js diferentes. Utilizando Python (Framework Flask) com Gunicorn e Implantação Azure. 

<br>
<div style="display: flex; justify-content: center; flex-wrap: wrap; ">
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://ecommerce-data-analysis.vercel.app/', '_blank');">Demonstração ao vivo</button>  
  <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;" onclick="window.open('https://github.com/imprvhub/ecommerce-data-analysis/', '_blank');">Repositório no Github</button>   
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
<br>

##### Atualização: 24 de abril de 2024

- **Migração do Azure para o Vercel**: Melhoria significativa na Experiência do Usuário (UE) ao migrar a infraestrutura de implantação do Azure para o Vercel. Essa migração estratégica aborda preocupações de desempenho encontradas com a implantação anterior no Azure. Aproveitando a plataforma otimizada do Vercel, garante operações mais suaves e eficientes, melhorando a confiabilidade e a capacidade de resposta do sistema como um todo. [Mais Informações.](https://github.com/imprvhub/ecommerce-data-analysis/releases/tag/v4.0.0)
<br>

#### Como funciona?:
<div style="text-align: center;">
  <iframe width="100%" height="600" src="https://www.youtube.com/embed/kJ6O4pHK_rc" frameborder="0" allowfullscreen style="margin: auto;"></iframe>
</div>


#### Principais Recursos:
1. <ins>**Obtenha Dados como um Super Admin:**<ins>

   Obtenha dados abrangentes de gerentes de loja, incluindo informações sobre suas lojas, produtos, vendas concluídas ou pendentes e clientes.

2. <ins>**Renderização Comparativa de Insights Analíticos:**<ins>

   Renderize e compare os dados adquiridos, fornecendo insights analíticos por meio de tabelas, gráficos do Plotly Express e visualizações do Matplotlib.

3. <ins>**Dashboard Dinâmico:**<ins>

   Acesse um painel dinâmico que permite monitoramento e análise em tempo real das métricas de e-commerce.

4. <ins>**Interface Amigável:**<ins>

   Navegue por uma interface amigável projetada para facilitar o uso e a exploração eficiente de dados.



#### Instalação e Execução Local:

##### Pré-requisitos
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

##### 1. Clone os Projetos 'Code With Antonio'. 
Para que esta implementação funcione corretamente, você deve clonar e configurar o [ecommerce-admin](https://github.com/antonioerdeljac/next13-ecommerce-admin) (em primeiro lugar) e depois os projetos [ecommerce-store](https://github.com/antonioerdeljac/next13-ecommerce-store) de 'Code With Antonio'. Para um tutorial detalhado, visite: [Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023](https://www.youtube.com/watch?v=5miHyP6lExg).

AVISO LEGAL: Certifique-se de criar uma loja funcional no ecommerce-admin com produtos que possam ser visualizados no ecommerce-store do lado do cliente. Lembre-se de que os pagamentos feitos na demonstração são simulados e usam dados genéricos, seguindo as práticas recomendadas da [Stripe Docs](https://stripe.com/docs/testing ). Se você já configurou a gestão de pagamentos de acordo com sua região, então pule a simulação. É recomendável não pular esta etapa, a menos que você tenha certeza e assuma a responsabilidade pelas respectivas movimentações ou transações que você gera. Este projeto é puramente demonstrativo para mostrar como funciona uma implementação Python. Não somos responsáveis por mal-entendidos ou má gestão. Para mais informações: [Clique aqui](https://ecommerce-data-analysis.vercel.app).

##### 2. Clone o repositório de implementação
```bash
git clone https://github.com/ivnimprv/ecommerce_data_analysis.git

```
##### 2.1 Navegue até o diretório do projeto
```bash
cd /your/folder/directory/ecomerce_data_analysis
```
##### 3. Instale as Dependências
```bash
pip install -r requirements.txt
```
##### 4. Inicie a aplicação localmente
```bash
python3 app.py
```
The application should now be accessible at http://localhost:8000.

#### Feedback e suporte:
Sua opinião é importante e estou pronto para ajudar a responder a quaisquer dúvidas ou comentários que você possa ter. Suas contribuições são essenciais para refinar o projeto e melhorar a experiência geral do usuário. Não hesite em entrar em contato comigo:

Sinta-se à vontade para compartilhar seus insights, recomendações ou sugestões para melhoria contínua. Se você encontrar algum desafio ou precisar de ajuda, [crie um novo problema no GitHub](https://github.com/imprvhub/ecommerce-data-analysis/issues/new). Certifique-se de fornecer uma descrição detalhada do seu problema para facilitar um suporte rápido e preciso.

#### Licença:
Para obter mais informações sobre este tópico, leia o seguinte [Contrato do Usuário](https://ecommerce-data-analysis.vercel.app).

#### Conclusão:

##### Problemas conhecidos:

- **Latência de desempenho:** Ocasionalmente, altas cargas de instância do Azure resultam em latência significativa. Para resolver isso, pretendo migrar o projeto para uma plataforma diferente no futuro, melhorando assim o desempenho.

##### Conquistas

- **Integração Bem-sucedida de Dados do Next.js:** Consegui a implementação do Python, combinando efetivamente dados extraídos de dois projetos Next.js.

##### Aprendizados

- **Estreia na Implantação Azure:** Este projeto marcou minha primeira implantação no Azure. Embora eu tivesse experiência anterior com Render, Vercel e Netlify, configurar minha aplicação Python, alimentada pelo Gunicorn, para rodar eficientemente no Azure apresentou um desafio único.



##### Planos Futuros

- **Melhorias Interativas:** No futuro, aspiramos implementar interatividade aos gráficos e análises, aprimorando a experiência geral do usuário.

##### Agradecimientos

- **Agradecimentos Especiais ao Code With Antonio:** Expressando minha gratidão por inspirar com projetos fundamentais e tornar possível esta implementação.

<br>
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Voltar ao Início</button>
      <button class="btn btn-primary" onclick="window.location.href='/projetos';">Voltar para Projetos</button>     
</div>

---
