import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import TeamsService from '@services/teams-service'

const removeSchema = Joi.object().keys({
  id: Joi.number().required()
})

const remove: RequestHandler = async (req, res) => {
  const { id } = req.params
  await TeamsService.remove(Number(id))
  res.send({
    message: 'OK'
  })
}

export default requestMiddleware(remove, {
  validation: {
    params: removeSchema
  }
})
