
const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*
Rotas / Recursos
*/
/*
Metodos HTTP :
get: Buscar uma informação do back-end
post: Criar uma informação no back-end
put: alterar uma informação no back-end
delete: deletar uma informação do back-end
*/

/*
Tipos de parametros:
Query Params: enviados dentro da URL nomeados (Filtros, paginação)
Route Params: parametros utilizados pa identificar recursos
Request Body: coro da requisição, utilizado para criar ou alterar recursos
*/
/*
SQL: SQLite
query builder: Knex
*/

