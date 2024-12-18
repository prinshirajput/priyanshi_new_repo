import express from 'express'
import * as admin_cntroler from '../Controler/admin_controler.js'
const router =express.Router()

router.post('/add',admin_cntroler.add)
router.post('/login',admin_cntroler.admin_login)

export default router ;