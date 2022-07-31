const http = require('http');
const fs= require('fs');
// require("./src/db/conn");
// const Register =require("./src/models/registers");



// const url= require('url')
var express=require("express");
// var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var app=express();

const hostname = '127.0.0.1';
const port = 3000;
const home =fs.readFileSync('index.html');
const dash =fs.readFileSync('dash.html');
const register =fs.readFileSync('register.html');
// const contact =fs.readFileSync('contact.html');
// const submission=fs.readFileSync('about.html');
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const server = http.createServer((req, res) => {
  console.log(req.url);
  url= req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url=='/'){

    res.end(home);
  }
   else if(url=='/dash.html'){
     
    res.end(dash);
  }
   else if(url=='/register.html'){

    res.end(register);
  }
//    else if(url=='/contact.html'){

//     res.end(contact);
//   }
 
//   else if(url=='/submission'){
//     res.end(menu);
//   }
  else{
    res.statusCode = 404;
    res.end("<h1> 404 not found </h1>")
  }
});