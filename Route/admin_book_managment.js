import express from 'express'
import * as admin_cntroler from '../Controler/admin_book_manegment.js'
const router =express.Router()
router.post('/add',admin_cntroler.add)
router.get('/get/:id',admin_cntroler.get_book)
router.put('/update',admin_cntroler.upaded_book)
router.delete('/delete',admin_cntroler.delete_book)
export default router ;
