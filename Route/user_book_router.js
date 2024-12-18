import express from 'express'
import * as admin_cntroler from '../Controler/user_book_collection.js'
const router =express.Router()
router.post('/add',admin_cntroler.add)


export default router