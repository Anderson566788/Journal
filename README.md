# 📰 Journal

Este projeto é uma API RESTful desenvolvida em **Node.js**, utilizando **Express** e **MySQL**. A aplicação simula uma plataforma de jornalismo digital, permitindo o cadastro de usuários, publicadores e a publicação de notícias.

> 🚀 **Nota:** Este projeto representa meu **primeiro contato com MySQL**. Foi uma excelente oportunidade para aprender sobre bancos de dados relacionais, modelagem de dados e integração com Node.js.

---

## 🚀 Funcionalidades

- ✅ Cadastro de publicadores (jornalistas)
- ✅ Criação de notícias
- ✅ Associação entre publicadores e suas notícias
- ✅ Leitura e listagem de notícias com filtros
- ✅ Estrutura organizada com separação entre controllers, models e rotas

---

## 🧱 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MySQL** - Banco de dados relacional
- **dotenv** - Gerenciamento de variáveis de ambiente

---

## 📁 Estrutura do Projeto

```
├── .env.example    # Exemplo de variáveis de ambiente
├── .gitignore  # Arquivos e pastas ignorados pelo Git
├── createTable.js  # Script para criação de tabelas no banco de dados
├── database-memory.js  # Configuração para banco de dados em memória
├── database-mysql.js   # Configuração para conexão com MySQL
├── db.js   # Arquivo principal de configuração do banco de dados
├── package.json    # Dependências e scripts do projeto
├── package-lock.json   # Versões fixas das dependências
├── routes.http     # Exemplos de requisições HTTP para testar a API
└── server.js   # Arquivo principal que inicia o servidor
```

## 📌 Observações
O arquivo routes.http contém exemplos de requisições HTTP que podem ser utilizados para testar a API em ferramentas como o Insomnia ou Postman.

O projeto inclui configurações para uso de banco de dados em memória (database-memory.js) e com MySQL (database-mysql.js). Certifique-se de utilizar o arquivo apropriado conforme seu ambiente de desenvolvimento.

## 📚 Aprendizados
Durante o desenvolvimento deste projeto, adquiri conhecimentos sobre:

Configuração e conexão com bancos de dados MySQL em aplicações Node.js.

Criação e execução de scripts para manipulação de bancos de dados.

Estruturação de projetos backend utilizando Express.

Gerenciamento de variáveis de ambiente com dotenv.


Este projeto foi desenvolvido com fins educacionais. Fique à vontade para sugerir melhorias ou relatar problemas através de issues ou pull requests.

---
Desenvolvido por Anderson Freire. 🚀