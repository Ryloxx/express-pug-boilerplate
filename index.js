const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8110

const app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.render('index', {
        redirectUrl: process.env.REDIRECT_URL,
        title: process.env.TITLE,
        text: process.env.TEXT,
        buttonText: process.env.BUTTON_TEXT,
        headText: process.env.HEAD_TEXT
    })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))