import express from 'express'
import bodyParser from 'body-parser'
import admin_router from './Route/adminroute.js'
import book_managment from './Route/admin_book_managment.js'
import './connection.js'
import user_router from './Route/user_router.js'
import user_book_router from './Route/user_book_router.js'
const app= express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/admin",admin_router)
app.use("/a_book_managment",book_managment)
app.use("/user",user_router)
app.use("/user_book",user_book_router)


app.listen(3001,()=>{
    console.log("server connected ")
})

