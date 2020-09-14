import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import PlayersService from '@services/players-service'

const addSchema = Joi.object().keys({
  name: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  countryOfBirth: Joi.string().required(),
  nationality: Joi.string().required(),
  position: Joi.string().required(),
  team: Joi.number().required()
})

const add: RequestHandler = async (req, res) => {
  const {
    name,
    dateOfBirth,
    countryOfBirth,
    nationality,
    position,
    team
  } = req.body
  const created = await PlayersService.create({
    name,
    dateOfBirth,
    countryOfBirth,
    nationality,
    position,
    team
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
