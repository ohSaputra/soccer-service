import { RequestHandler } from 'express'
import Joi from 'joi'
import requestMiddleware from '@middlewares/request'
import TeamsService from '@services/teams-service'

const listSchema = Joi.object().keys({
  skip: Joi.number().required(),
  limit: Joi.number().required()
})

const show: RequestHandler = async (req, res) => {
  const { skip, limit } = req.body
  const [teams, totalTeams] = await TeamsService.list({ skip, limit })
  res.send({
    message: 'OK',
    data: teams,
    count: totalTeams,
    skip,
    limit
  })
}

export default requestMiddleware(show, {
  validation: {
    body: listSchema
  }
})
