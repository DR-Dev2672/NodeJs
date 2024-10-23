const http=require("http")
const fs=require("fs")
const url=require("url")




const myServer=http.createServer((req,res)=>{
 const log=(`server is created ${Date.now()}: this is   ${req.url}  \n`)
 if(req.url==="/favicon.ico") return;
 const myUrl=url.parse(req.url,true);
 console.log(myUrl)
    fs.appendFile("contact.txt",log,(err,data)=>{
     switch(req.url){
        case "/":
        if(req.method==='GET'){
            res.end(`hii this is homepage`)
        }
            
            break
        case "/about":
            res.end(`this is about`)
            break
        case "/signup":
            if(req.method==='GET')res.end("hii this is signup")
            else if(req.method==='POST'){res.end("this is post method call on signup form")}

        default:
            res.end("this is 404 not found")


     }
    })
  
})

myServer.listen(8000)




