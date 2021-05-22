const GoogleSpreadsheet = require('google-spreadsheet');
const wbm = require('wbm');
const credentials = require('../../credentials.json');
const { promisify } = require('util');



// Modulo WhatsApp

wbm.start().then(async () => {
    const phones = ['5535988841854', '35988841854', '5535988841854'];
    const message = 'Good Morning.';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));


// Module GoogleSheet

//let Date = []

// nao é uma promisse
const docId = '1gOcCyNosINPz41VPiLG95Tkba67bQtf9OJcBNg2gjbw'
// const doc = new GoogleSpreadsheet(docId);

// doc.useServiceAccountAuth(credentials, err => {
//     doc.getInfo((err, info) => {
//         console.log(info)
//     })
// })
// Promisificar 




 const accessSheet = async() => {
    let Date = {}
    const doc = new GoogleSpreadsheet(docId);
    await promisify(doc.useServiceAccountAuth)(credentials);
    const info = await promisify(doc.getInfo)()
    const worksheet = info.worksheets[0];
    const rows = await promisify(worksheet.getRows)({})
    
    //console.log(rows)
    // get
     rows.forEach((row, index) => {
          Date[index] = { nome: row.nome}
      })
      return Date;
    //set
    // await promisify(worksheet.addRow)({
    //     nome: 'Felipe',
    //     idade: 30
    // })
    // filtrar dados 
    // const rows = await promisify(worksheet.getRows)({
    //     query: 'nome = "Felipe"'
    // })
    // rows.forEach(row => {
    //     console.log(row.nome)
    //     row.del()// deletar linha
    // })
}

  const accessSheetPost = async(valor) => {
    
    const doc = new GoogleSpreadsheet(docId);
    await promisify(doc.useServiceAccountAuth)(credentials);
    const info = await promisify(doc.getInfo)()
    const worksheet = info.worksheets[0];
    //const rows = await promisify(worksheet.getRows)({})
    
     
    //set
     await promisify(worksheet.addRow)({
         nome: valor.nome
     })
    // filtrar dados 
    // const rows = await promisify(worksheet.getRows)({
    //     query: 'nome = "Felipe"'
    // })
    // rows.forEach(row => {
    //     console.log(row.nome)
    //     row.del()// deletar linha
    // })
}

module.exports = {accessSheet, accessSheetPost}