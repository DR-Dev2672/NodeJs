const express=require('express');
const app=express();

const fs=require('fs')

//    middle ware are of two types
//    first one is built in and second is 
//    custom build

//built in
app.use(express.urlencoded({extended:false}))


//custom built

app.use((req,res,next)=>{
    fs.appendFile('log.txt',`\n${req.ip} : ${req.path} : ${req.method} : ${Date.now()}\n`,(err,data)=>{
     next();
    })
    
})

app.use((req,res,next)=>{
 console.log("this is Middleware 1")
 req.myUserName="dev";
 next();
//  return res.json({msg:"hello from middleware 1"})
 
})

app.use((req,res,next)=>{
    console.log("this is Middleware 2")
    console.log(req.myUserName);
    next()
   })

app.get('/user',(req,res)=>{
    res.send("welcome to user route")
   
})

app.listen(3000,()=>{
  console.log("welcome at 3000 port")
})