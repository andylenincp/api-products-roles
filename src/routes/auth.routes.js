import {Router} from 'express'
import * as authController from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'

const router = Router()

router.post('/signup', [
    verifySignup.checkDuplicateUsernameOrEmail,
    verifySignup.checkRolesExisted
], authController.signup)
router.post('/signin', authController.signin)

export default router