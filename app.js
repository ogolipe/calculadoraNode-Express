const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { dirname } = require('path');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req,res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);

    const soma = n1 + n2;

    res.send("Resultado da soma é:"+soma);
})

app.listen(3000, (err) => {
    if(err){
        console.log('Servidor Inativo');
    } else {
        console.log('servidor Online');
    }
})
