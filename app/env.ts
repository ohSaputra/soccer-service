import * as dotenv from 'dotenv'

/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config()

/**
 * Environment variables
 */
export const env = {
  node: process.env.NODE_ENV ?? 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  app: {
    host: process.env.APP_HOST ?? 'http://localhost:8888',
    port: process.env.APP_PORT ?? 8888
  },
  db: {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE
  }
}
