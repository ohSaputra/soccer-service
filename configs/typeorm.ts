/*
|--------------------------------------------------------------------------
| TypeOrm - Database ORM
|--------------------------------------------------------------------------
|
| This file is dedicated for defining Database configurations
| rather than updating data from this function better to
| update it via `.env` file
|
*/
import { getConnectionOptions, ConnectionOptions } from 'typeorm'
import { env } from '@app/env'

const DatabaseOptions = async (): Promise<ConnectionOptions> => {
  const loadedConnectionOptions = await getConnectionOptions()
  const connectionOptions = Object.assign(loadedConnectionOptions, {
    type: env.db.type,
    host: env.db.host,
    port: env.db.port,
    username: env.db.username,
    password: env.db.password,
    database: env.db.database,
    entities: ['app/models/**/*.entity.ts'],
    synchronize: true,
    logging: false
  })

  return connectionOptions
}

export default DatabaseOptions
