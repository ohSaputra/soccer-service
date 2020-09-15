/* eslint-disable import/first */
import 'reflect-metadata'
import 'module-alias/register'

import app from '@app/start'
import logger from '@configs/logger'
import DatabaseService from '@services/database-service'
import { env } from '@app/env'

DatabaseService.connect()
  .then(async () => {
    // Seeding the database for testing reason
    await DatabaseService.populateData()
    app.listen(env.app.port, () => {
      console.log('\x1b[36m%s\x1b[0m', `Express server started at http://localhost:${env.app.port}/api`)
      console.log('\x1b[36m%s\x1b[0m', `Endpoint documentation hosted at http://localhost:${env.app.port}/api/docs`)
    })
  })
  .catch(e => { throw e })

// Close any services, when receiving SIGINT
process.on('SIGINT', () => {
  logger.info('Gracefully shutting down')
  DatabaseService.close()
    .then(() => { process.exit(0) })
    .catch(e => { throw e })
})
