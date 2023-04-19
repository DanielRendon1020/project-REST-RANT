require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send(`
    <body style="text-align: center;">
        <h1 style="font-size: 10rem">404 Page</h1>
        <img src="https://media.giphy.com/media/0avOIv3VoMz3WcDGXW/giphy.gif">
    </body>`)
})

app.listen(process.env.PORT)


