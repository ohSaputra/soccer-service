import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import TeamsService from '@services/teams-service'

const showSchema = Joi.object().keys({
  id: Joi.number().required()
})

const show: RequestHandler = async (req, res) => {
  const { id } = req.params
  const teams = await TeamsService.findOne(Number(id))
  res.send({
    message: 'OK',
    data: teams
  })
}

export default requestMiddleware(show, {
  validation: {
    params: showSchema
  }
})
