const express = require('express')
const path = require('path')
const app = express()
const bodyparser = require('body-parser')

const surfspotArray = require('./data/surfspots')
var randNum = 0


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/surfspot', (req, res) => {
  randNum = req.body.randNum
  console.log(randNum)
})

app.get('/surfspot', (req, res) => res.json(surfspotArray[randNum]))

app.listen(3000, () => console.log('http://localhost:3000'))



