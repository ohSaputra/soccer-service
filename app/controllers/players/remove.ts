import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import PlayersService from '@services/players-service'

const removeSchema = Joi.object().keys({
  id: Joi.number().required()
})

const remove: RequestHandler = async (req, res) => {
  const { id } = req.params
  await PlayersService.remove(Number(id))
  res.send({
    message: 'OK'
  })
}

export default requestMiddleware(remove, {
  validation: {
    params: removeSchema
  }
})
