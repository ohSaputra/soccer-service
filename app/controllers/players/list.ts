import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import PlayersService from '@services/players-service'

const listSchema = Joi.object().keys({
  skip: Joi.number().required(),
  limit: Joi.number().required()
})

const show: RequestHandler = async (req, res) => {
  const { skip, limit } = req.body
  const [players, totalPlayers] = await PlayersService.list({ skip, limit })
  res.send({
    message: 'OK',
    data: players,
    count: totalPlayers,
    skip,
    limit
  })
}

export default requestMiddleware(show, {
  validation: {
    body: listSchema
  }
})
