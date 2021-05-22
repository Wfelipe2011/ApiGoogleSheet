const bodyParser = require('body-parser');
const googleSheet = require('./src/Service/index.js')
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static("public"));


/// Routas da Aplicação


app.get('/', async function (req, res) {
    const Date = await googleSheet.accessSheet();
    //console.log(Date)
    res.send(Date);
});

app.post('/', async function (req, res) {
    const Date = req.body
    console.log(Date)
    await googleSheet.accessSheetPost(Date);
    res.send(Date);
});



app.get('/:id', async function (req, res) {
    const id = req.params
    const n = parseInt(id.id)
    console.log(n);
    const Date = await googleSheet.accessSheet();
    //console.log(Date)
    res.send(Date[n]);
});

app.listen(3000, function () {
    console.log('App de Exemplo escutando na porta 3000!');
});