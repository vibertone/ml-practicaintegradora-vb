const express = require("express");
const { appendFile } = require("fs");
const { dirname } = require("path");
const path = require ("path");
const app = express();
const publicPath=path.join (__dirname,'/public');

app.use("/fuentes",  express.static(publicPath));

app.get("/home", (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/home.html'))
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/home.html'))
});
app.listen(process.env.PORT||3000,function (){
    console.log ("Levantando un servidor con Express");

});
app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/login.html'))
});
app.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/register.html'))
});