const bodyParser = require('body-parser');
const googleSheet = require('../Service/index')
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static("public"));

module.exports = {
    async index(res) {
        const Date = await googleSheet.accessSheet();
        return res.send(Date);
    },
    async poster(req, res) {
        const Date = req.body
        console.log(Date)
        await googleSheet.accessSheetPost(Date);
        res.send(Date);
    },
    async getId(req, res) {
        const id = req.params
        const n = parseInt(id.id)
        console.log(n);
        const Date = await googleSheet.accessSheet();
        //console.log(Date)
        res.send(Date[n]);
    }
}