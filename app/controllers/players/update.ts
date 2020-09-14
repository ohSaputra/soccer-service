import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import PlayersService from '@services/players-service'

const updateBodySchema = Joi.object()
const updateParamSchema = Joi.object().keys({
  id: Joi.number().required()
})

const update: RequestHandler = async (req, res) => {
  const { id } = req.params
  const updated = await PlayersService.edit(Number(id), req.body)
  res.send({
    message: 'OK',
    data: updated
  })
}

export default requestMiddleware(update, {
  validation: {
    body: updateBodySchema,
    params: updateParamSchema
  }
})
