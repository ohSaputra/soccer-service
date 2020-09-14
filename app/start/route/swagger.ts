import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import apiSpec from '../../../openapi.json'

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
}

const router = Router()

router.use('/docs', swaggerUi.serve)
router.route('/docs').get(swaggerUi.setup(apiSpec, swaggerUiOptions))

export default router
