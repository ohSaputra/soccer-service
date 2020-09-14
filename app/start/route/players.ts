import { Router } from 'express'
import * as PlayersController from '@app/controllers/players'

const router = Router()

router.route('/:id').get(PlayersController.show)
router.route('/:id').delete(PlayersController.remove)
router.route('/:id').put(PlayersController.update)
router.route('').put(PlayersController.add)
router.route('').post(PlayersController.list)

export default router