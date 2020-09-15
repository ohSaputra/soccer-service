import {
  RequestHandler, Request, Response, NextFunction
} from 'express'
import Joi from 'joi'
import BadRequest from '@errors/bad-request'
import logger from '@configs/logger'
import { env } from '@app/env'

const getMessageFromJoiError = (error: Joi.ValidationError): string | undefined => {
  if (error.details.length === 0 && error.message != null) {
    return error.message
  }
  return error.details.length > 0 && error.details[0].message != null
    ? `PATH: [${error.details[0].path[0]}] ;; MESSAGE: ${error.details[0].message}` : undefined
}

interface HandlerOptions {
  validation?: {
    body?: Joi.ObjectSchema | Joi.ArraySchema
    params?: Joi.ObjectSchema
  }
}

/**
 * This router wrapper catches any error from async await
 * and throws it to the default express error handler,
 * instead of crashing the app
 * @param handler Request handler to check for error
 */
export const relogRequestHandler = (
  handler: RequestHandler,
  options?: HandlerOptions
): RequestHandler => async (req: Request, res: Response, next: NextFunction) => {
  if (options?.validation?.body != null) {
    const { error } = options?.validation?.body.validate(req.body)
    if (error != null) {
      return next(new BadRequest(getMessageFromJoiError(error)))
    }
  }
  if (options?.validation?.params != null) {
    const { error } = options?.validation?.params.validate(req.params)
    if (error != null) {
      return next(new BadRequest(getMessageFromJoiError(error)))
    }
  }

  return handler(req, res, next).catch((err: Error) => {
    if (env.isDevelopment) {
      logger.log({
        level: 'error',
        message: 'Error in request handler',
        error: err
      })
    }
    next(err)
  })
}

export default relogRequestHandler
