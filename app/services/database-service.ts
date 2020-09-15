import { createConnection, getConnection } from 'typeorm'
import DatabaseOptions from '@configs/typeorm'
import logger from '@configs/logger'
import PlayersService from '@services/players-service'
import TeamsService from '@services/teams-service'
import populateData from '@app/start/populateData'

const DatabaseService = {
  async connect () {
    const options = await DatabaseOptions()
    await createConnection(options)
  },

  async close () {
    await getConnection().close()
  },

  async clear () {
    console.info('Clearing database data for development purpose ...')
    await PlayersService.flush()
    await TeamsService.flush()
    logger.info('Successfully clear table data.')
  },

  async populateData () {
    const [players, count] = await PlayersService.list({ skip: 0, limit: 5 })
    if (count === 0) {
      logger.info('Populating data from mock data ... ')
      await populateData()
      console.info('Successfully load data.\n')
      console.info('Starting Express Server...')
    }
  }
}

export default DatabaseService
