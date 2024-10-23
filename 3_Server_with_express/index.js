const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send("hii this is homepage from welcome through express")
})
app.listen(8000,()=>{
    console.log("server with express is ready")
}
)


