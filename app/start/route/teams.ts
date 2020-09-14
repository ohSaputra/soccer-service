import { Router } from 'express'
import * as TeamsController from '@app/controllers/teams'

const router = Router()

router.route('/:id').get(TeamsController.show)
router.route('/:id').delete(TeamsController.remove)
router.route('/:id').put(TeamsController.update)
router.route('').put(TeamsController.add)
router.route('').post(TeamsController.list)

export default router