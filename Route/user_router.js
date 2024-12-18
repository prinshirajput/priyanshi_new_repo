import express from 'express'
import * as user_controler from '../Controler/user_controler.js'
const router =express.Router()

router.post('/signup',user_controler.signup)

router.post('/login',user_controler.login)


export default router ;