const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3300


//Set template Engine
app.use(expressLayout)
app.set('views' , path.join(__dirname, '/resources/views'))
app.set('view engine' , 'ejs')

app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`)
})
//assets
app.use(express.static('public'))

app.get('/' , (req , res) => {
    res.render('home')
})

app.get('/login', (req , res) => {
    res.render('auth/login')
})

app.get('/register', (req , res) => {
    res.render('auth/register')
})

app.get('/cart', (req , res) => {
    res.render('customers/cart')
})