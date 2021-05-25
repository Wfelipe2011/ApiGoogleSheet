import express from 'express';

const app = express();

app.use('/', require('./routes/routes.js'))
app.listen(3000, function () {
    console.log('App de Exemplo escutando na porta 3000!');
});

/// Routas da Aplicação

/// ESTA AGORA NA PAGINA ".src/controller/crud.js" e ".src/routes/routes.js"

{/*} 
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
*/}

