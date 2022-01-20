const express = require('express');
const app = express();
const HtmlToDocx = require('./routes/htmlToDocx');
const DeleteFile = require('./routes/deleteFile')
require('dotenv/config');
const port = process.env.PORT || 3000;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    console.log(`Bem vindo`);
    res.send('root')
  })

app.post('/htmltodocx',HtmlToDocx);
app.post('/deletefile',DeleteFile);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  })