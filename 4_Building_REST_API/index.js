const express=require("express");
const app=express();
const user=require("./MOCK_DATA.json")




app.get('/user',(req,res)=>{
    //here is user understandable user response

    res.send(
        
    );
})

app.get('/api/user',(req,res)=>{
    res.send(user)
})
app.get('/api/user/:id',(req,res)=>{
    const id= Number(req.params.id);
    const userr=user.find((user)=>(user.id===id));
    return res.json(userr);
    
    // res.send(user[Number(id)]);
})

app.post('/api/user/',(req,res)=>{
    // code

    return res.json({status:"pending"})
})
app.patch('/api/user/:id',(req,res)=>{
    // code

    return res.json({status:"pending"})
})
app.delete('/api/user/:id',(req,res)=>{
    // code

    return res.json({status:"pending"})
})


app.listen(3000,()=>{
    console.log("server is started")
})