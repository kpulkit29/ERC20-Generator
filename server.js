
const express = require('express')
const app = express();
app.use(express.static(__dirname+"/build"));
//a route to connect to the chatkit
app.get("/",function(req,res){
  res.sendFile(__dirname+"/build/index.html");
})

app.listen(process.env.PORT||3000)