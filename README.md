# KImóveis API

Esta API foi desenvolvida para gerenciar usuários, categorias, imóveis e agendamentos. A seguir, estão listados os requisitos e as especificações das rotas disponíveis:

## POST - /users
Criação de usuário com os seguintes dados:

**name**: string (máximo de 45 caracteres, obrigatório)
**email**: string (máximo de 45 caracteres, obrigatório e único)
**password**: string (máximo de 120 caracteres, obrigatório, armazenado como hash)
**admin**: boolean (obrigatório, false por padrão)
**Retorno**: Todos os dados, exceto a hash de senha.

### Observações:

Não é possível cadastrar dois usuários com o mesmo e-mail.
A rota não requer autenticação.

## GET - /users
Lista todos os dados dos usuários, exceto a hash de senha.

**Acesso: Apenas por usuários administradores.
**

## PATCH - /users/:id
Atualiza os dados do usuário.

Não é possível atualizar os campos id e admin.
Apenas administradores podem atualizar qualquer usuário, enquanto usuários não-administradores só podem atualizar seu próprio usuário.

## DELETE - /users/:id
Realiza um soft delete do usuário.

**Acesso: Apenas por administradores.**
Não é possível realizar um soft delete em um usuário já deletado.

## POST - /login
Rota de login recebendo email e password.

Valida se o usuário existe e se a senha está correta.
Não é possível realizar o login de um usuário marcado como deletado.

### Observações:

A rota não requer autenticação.

## POST - /categories
Criação de categorias com os seguintes dados:

**name**: string (máximo de 45 caracteres, obrigatório e único)
**Acesso**: Apenas por usuários administradores.

## GET - /categories
Lista todas as categorias.

Observações:

A rota não requer autenticação.
GET - /categories/:id/realEstate
Lista todos os imóveis que pertencem a uma categoria.

### Observações:

A rota não requer autenticação.

## POST - /realEstate
Criação de um imóvel com os seguintes dados:

**value**: decimal (precisão 12 e escala 2, obrigatório, 0 por padrão)
**size**: inteiro (obrigatório)
**address** (objeto conforme entidade Address):
**street**: string (máximo de 45 caracteres, obrigatório)
**zipCode**: string (máximo de 8 caracteres, obrigatório)
**number**: number (inteiro, positivo, obrigatório)
**city**: string (máximo de 20 caracteres, obrigatório)
**state**: string (máximo de 2 caracteres, obrigatório)
**categoryId**: number (inteiro, obrigatório)
**Retorno**: Todos os dados, exceto a propriedade "sold".

### Observações:

Não é possível cadastrar dois imóveis com o mesmo endereço.
A rota só pode ser acessada por administradores.

## GET - /realEstate
Lista todos os imóveis.

### Observações:

A rota não requer autenticação.

## POST - /schedules
Agendamento de uma visita a um imóvel com os seguintes dados:

**date**: string (data de agendamento no formato AAAA-MM-DD)
**hour**: string (horário de agendamento no formato HH:MM)
**realEstateId**: number (inteiro, obrigatório)

### Observações:

Não é possível agendar duas visitas com a mesma data e hora para um usuário.
Não é possível agendar uma visita com data e hora fora do horário comercial (08:00 às 18:00) ou em fins de semana.
A rota pode ser acessada tanto por usuários comuns quanto administradores.

## GET - /schedules/realEstate/:id
Lista todos os agendamentos de um imóvel.

**Acesso**: Apenas por administradores.

### GET - /schedules/realEstate/:id

- Rota deve listar todos os agendamentos de um imóvel.
- A rota pode ser acessada apenas por administradores.
