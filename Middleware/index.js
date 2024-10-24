const express=require('express');
const app=express();

app.get('/user',(req,res)=>{
    res.send("welcome to user route")
})

app.listen(3000,()=>{
  console.log("welcome at 3000 port")
})