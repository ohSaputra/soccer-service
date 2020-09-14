import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import { corsOptions } from '@configs/cors'
import errorHandler from '@errors/handler'
import router from '@app/start/routes'

const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Assign routes
app.use('/api', router)

app.use(errorHandler)

export default app
