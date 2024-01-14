const express = require('express')
const mongoose = require('mongoose')
const methodOverride=require('method-override')
require('dotenv').config()

const postRoutes=require('./routes/post-routes')
const postApiRoutes=require('./routes/api-post-routes')
const contactsRoutes=require('./routes/contacts-routes')
const createPath=require('./utilits/createPath')

const app = express()

mongoose.connect(process.env.MongoUrl).then(res => {
    console.log('connected to DB')
}).catch(error => {
    console.log(error)
})

app.set('view engine', 'ejs')   

app.use(express.urlencoded({ extended: false }))

app.use(express.static('styles'));

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    const title = 'Home'
    res.render(createPath('index'), { title })
})

app.use(postRoutes)
app.use(contactsRoutes)
app.use(postApiRoutes)

app.use((req, res) => {
    const title = 'Error'
    res.status(404).render(createPath('error'), { title })
})

app.listen(process.env.PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${process.env.PORT}`)
})