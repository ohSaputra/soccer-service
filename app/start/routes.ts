/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/route/cart.ts
| ├── start/route/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './cart'
| import './customer'
|
*/
import { Router } from 'express'
import playerRouter from './route/players'
import teamRouter from './route/teams'
import swagger from './route/swagger'

const router = Router()

// Player Endpoint
router.use('/player', playerRouter)

// Team Endpoint
router.use('/team', teamRouter)

// Health-check Endpoint
router.get('/health', (req, res) => res.json({ message: 'OK' }))

// Api Documentation Endpoint
router.use('', swagger)

export default router
