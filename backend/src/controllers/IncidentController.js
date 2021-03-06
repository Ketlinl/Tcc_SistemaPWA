
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const incidents = await connection('incidents').select('*');
        return response.json(incidents);
    },
    async create(request, response) {
        const { title, description } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            ong_id,
        });

        return response.json({ id });
    },
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(incident.ong_id == ong_id){
            await connection('incidents').where('id', id).delete();
        }
        else{
            return response.status(401).json({ error: 'Operation not permitted.'});
        }
    
   //resposta de sucesso sem conteudo
      return  response.status(204).send();
   
    }
};




