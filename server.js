const express = require('express')
const path = require('path')
const app = express()
const bodyparser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routes/htmlroutes')(app)

app.listen(3000, () => console.log('http://localhost:3000'))

