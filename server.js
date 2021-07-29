const express = require('express');
const moment = require('moment');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/date',(req,res)=>{
    const date = moment().locale('es').format('LL')
    res.send(`Hoy es ${date}`)
})

app.get('/text',(req, res)=>{
    fs.readFile('text.txt','utf8', (err, text)=>{
        if(err) return res.send(err);
        res.send(text)
    }
    )
})

app.post('/greetings',(req,res)=>{
    const {name} = req.body;
    res.json(`Buenos dias, ${name}!`)
})

module.exports = app;