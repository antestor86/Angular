var express = require("express");
var app = express();
var users = [
  {
    id:1,
    name:"Razmik",
    age:32
  },
  {
    id:2,
    name:"Admin",
    age:30
  }
]
app.get('/',function(req,res){
  res.send('localhost:4200');
})

app.get('/users',function(req,res){
  res.send(users);
})

app.listen(3000,function(){
  console.log('Server Started')
})

app.use((req,res,next)=>{
  res.setHeader("Accsess-Control-Aloow-Origin","*");
  res.setHeader(
    "Accsess-Control-Aloow-Headers",
    "Origin,Content-Type,Access"
  );
  resSetHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  next();
})
