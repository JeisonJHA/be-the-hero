const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection('incident').insert({
      title, description, value, ong_id
    })

    res.json({ id })
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization

    const incident = await connection('incident')
      .where('id', id)
      .select('ong_id')
      .first();

    if (!incident) {
      return res.status(404).json({ error: "There is no incident" })
    }
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: "Operation not authorized" })
    }

    await connection('incident').where('id', id).delete();

    return res.status(204).send()
  },

  async index(req, res) {
    const { page = 1 } = req.query
    const [count] = await connection('incident').count()    
    const ongs = await connection('incident')
      .join('ongs', 'ongs.id', '=', 'incident.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['incident.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])

    res.header('X-Total-Count', count['count(*)'])
    return res.json(ongs)
  }
}