const express = require('express')
const path = require('path')
const app = express()
const bodyparser = require('body-parser')
const PORT = process.env.PORT || 3000;

const fs = require('fs');

console.log(fs.readdirSync('.'));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiroutes")(app);

app.listen(PORT, () => console.log('http://localhost:3000'))



