---
title: "⚡️BoltURL - Uma Aplicação Web para Encurtar Links em Python [Flask]."
meta_title: "Iván Luna - Desenvolvedor de Software - BoltURL"
description: "esta é uma meta descrição"
date: 2024-01-20T05:00:00Z
image: "/images/assets/bolt-url.png"
categories: ["Python","Flask","PostgreSQL","Supabase","Soluções","Desenvolvimento Backend","Implantação Vercel"]
tags: ["bolt-url"]
draft: false
---

### Bem-vind@s ao Projeto [Bolt URL!](https://bolturl.site/).
Esta aplicação web de encurtamento de links mostra como o Python pode fazer de tudo. Utilizando Python (Framework Flask) com MySQL (Planetscale). Para insights detalhados, visite o [Repositório no Github](https://github.com/imprvhub/bolturl-python).

#### Demonstração Ao Vivo: [bolturl.site](https://bolturl.site)

#### Principais Recursos:
- **Encurtamento de Links:**
    - Permite que os usuários encurtem URLs longas, criando links mais concisos.

- **Uso de Python e Flask:**
    - Demonstração das capacidades do Python, utilizando especificamente o framework Flask.
    - Alavanca o Python para funcionalidades no backend, mostrando sua versatilidade no desenvolvimento web.

- **Interface Amigável:**
    - Fornece uma interface amigável para uma experiência intuitiva do usuário.
    - Incorpora modelos e estilos para aprimorar o apelo visual da aplicação web.

#### Pré-requisitos:
[**Python 3.11**](https://www.python.org/downloads/release/python-3110/)

#### Instalação e Execução Local

##### 1. Clone este projeto.
```bash
git clone https://github.com/ivnimprv/bolturl-python.git
```
##### 2.1 Navegue até o diretório do projeto (no seu terminal IDE)
```bash
cd /your/folder/directory/bolturl-python
```
##### 3. Instale as Dependências
```bash
pip install -r requirements.txt
```
##### 4. Crie seu próprio banco de dados (Abordagem Planetscale [MYSQL]) e substitua as seguintes variáveis de ambiente para obter total funcionalidade do aplicativo na produção local.
```bash
domain_url = os.getenv("DOMAIN_URL", "http://localhost:5000")
hashids_salt = os.getenv("HASHIDS_SALT")
hashids = Hashids(salt=hashids_salt, min_length=4)  
connection = pymysql.connect(
        host=os.getenv("DATABASE_HOST"),
        user=os.getenv("DATABASE_USERNAME"),
        passwd=os.getenv("DATABASE_PASSWORD"),
        db=os.getenv("DATABASE"),
        ssl={"ssl_accept": "strict"}
    )
```
##### 5. Execute com o seguinte comando no seu terminal IDE.
```bash
python3 index.py
```

### Feedback e suporte:
Sua opinião é importante e estou pronto para ajudar a esclarecer quaisquer dúvidas ou comentários que você possa ter. Suas contribuições são essenciais para aperfeiçoar o projeto e melhorar a experiência geral do usuário. Não hesite em manter contato comigo:

Fique à vontade para compartilhar seus conhecimentos, recomendações ou sugestões para melhoria contínua. Se você encontrar algum desafio ou precisar de ajuda, [crie um novo problema no GitHub](https://github.com/imprvhub/bolturl-python/issues/new). Certifique-se de fornecer uma descrição detalhada do seu problema para facilitar uma assistência rápida e precisa.

### Licença:
Para obter mais informações sobre este tópico, leia a seguinte [Contrato do Usuário](https://www.bolturl.site/user_agreements).

#### Conclusão:

##### Conquistas

- **Burlou com sucesso os recursos restritos pelo CORS:** Às vezes, ao realizar tarefas específicas entre servidores, o mecanismo CORS restringe certas operações. Isso aconteceu neste projeto quando estava tentando redirecionar para links encurtados.

##### Aprendizados

- **Sem Framework Frontend:** Neste projeto, aprendi que às vezes não é necessário depender de outros frameworks frontend.

---
<div class="flex justify-between">
      <button class="btn btn-primary" onclick="window.location.href='/';">Voltar ao Início</button>
      <button class="btn btn-primary" onclick="window.location.href='/projetos';">Voltar para Projetos</button>     
</div>

---
