const http=require("http")
const fs=require("fs")



const myServer=http.createServer((req,res)=>{
 const log=(`server is created ${Date.now()} ${req.url}\n`)
 if(req.url==="/favicon.ico") return;
    fs.appendFile("contact.txt",log,(err,data)=>{
     switch(req.url){
        case "/":
            res.end(`hii this is homepage`)
            break
        case "/about":
            res.end(`this is about`)
            break
        default:
            res.end("this is 404 not found")


     }
    })
  
})

myServer.listen(8000)




