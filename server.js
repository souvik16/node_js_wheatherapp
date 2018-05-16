const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.send({
        user:'souvik',
        age:25
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:'about page',
        header : 'about page header' ,
        paragraph : 'this is about page'
    })
});

app.get('/bad',(req,res)=>{
    res.send({errorMessage:'bad request page'});
})

app.listen(port,()=>{
    console.log(`starting server at ${port}`)
});