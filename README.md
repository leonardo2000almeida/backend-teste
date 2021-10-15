
# backend bot/messages

Uma aplicação express com typescript.
## API Reference

## Link: https://back-bradesco-prd.herokuapp.com/

#### Messages Route

##### List messages
```http
  GET /messages
```


| Query| Type     | Description                |
| :-------- | :------- | :------------------------- |
| conversationId | `string` | |

##### Get by id

```http
  GET /messages/:id
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** |



##### Create Message
  ```http
  POST /messages/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `conversationId`      | `string` | **Required**|
|`from`|`number`|**required**|
|`to`|`number`|**required**|
|`text`|`string`|**required**|


#### Bots Route

##### List bots
```http
  GET /bots
```


##### Get by id

```http
  GET /bots/:id
```
| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**|


##### Create bot
```http
  POST /bots
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**|
|`id`|`number`|**required**|

##### Update bot
```http
  PUT /bots/:id
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` ||
|`id`|`number`||

##### Delete bot
```http
  DELETE /bots/:id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**|

## Rodando localmente

Clone o projeto

```bash
  git clone  https://github.com/leonardo2000almeida/backend-teste
```

Vá para o diretório do projeto

```bash
  cd backend-teste
```

Instale as dependências

```bash
  npm install
```

Rode o applicativo

```bash
  npm run dev
```

  ```bash
  Solicite as variaveis de ambiente ao gerente do projeto
  ```
