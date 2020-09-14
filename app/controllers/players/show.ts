import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import PlayersService from '@services/players-service'

const showSchema = Joi.object().keys({
  id: Joi.number().required()
})

const show: RequestHandler = async (req, res) => {
  const { id } = req.params
  const player = await PlayersService.findOne(Number(id))
  res.send({
    message: 'OK',
    data: player
  })
}

export default requestMiddleware(show, {
  validation: {
    params: showSchema
  }
})
