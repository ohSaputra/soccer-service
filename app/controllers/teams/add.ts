import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import TeamsService from '@services/teams-service'

const addSchema = Joi.object().keys({
  name: Joi.string().required(),
  tla: Joi.string().required(),
  address: Joi.string().required(),
  email: Joi.string().email().required(),
  founded: Joi.number().required()
})

const add: RequestHandler = async (req, res) => {
  const {
    name,
    tla,
    address,
    email,
    founded
  } = req.body
  const created = await TeamsService.create({
    name,
    tla,
    address,
    email,
    founded
  })
  res.send({
    message: 'OK',
    data: created
  })
}

export default requestMiddleware(add, {
  validation: {
    body: addSchema
  }
})
