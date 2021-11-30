const express = require('express');
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//Model/View/Controller - MVC

app.get('/', (req, res)=>{
    res.render('home');
});

app.listen(3003, ()=>{
    console.log("Servidor ativo na porta 3003");
});