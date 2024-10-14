const fs=require("fs")


// fs.writeFileSync("./fileText.txt","Hii file testing")
// fs.writeFile("./fileText.txt","Hii file testing async",()=>{})



// const result= fs.readFileSync("./contact.txt","utf-8")
// console.log(result)


fs.readFileSync("./contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error:",err)
    }
    else{
        console.log(result)
    }
})



