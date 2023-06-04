
const express=require("express")
const app=express();// express applicayion created
const path=require("path");
const parser=require("body-parser");
//middlewares

app.use(parser.urlencoded({extended:false}))

app.get("/",(req,resp)=>{

    resp.sendFile(path.join(__dirname,"/form.html"));
})
var t=0;
app.get("/task",(req,resp)=>{
    // console.log(req);
    if(req.query.btn=="add")
    {
        arr=req.query.n1.split(",");
        arr.forEach(element => {
            t+=parseInt(element)
            
        });
        resp.send(`Addition:${t}<br><a href="/">task</a>`);
    }else if(req.query.btn=="sub")
    {
        arr=req.query.n1.split(",");
        arr.forEach(element => {
            t-=parseInt(element)
            
        });
        resp.send(`Substraction:${t}<br><a href="/">task</a>`);
    }else if(req.query.btn=="mul")
    {
        arr=req.query.n1.split(",");
        arr.forEach(element => {
            t*=parseInt(element)
            
        });
        resp.send(`Multiplication:${t}<br><a href="/">task</a>`);
    }else if(req.query.btn=="div")
    {
        arr=req.query.n1.split(",");
        arr.forEach(element => {
            t/=parseInt(element)
            
        });
        resp.send(`Division:${t}<br><a href="/">task</a>`);
    }else if(req.query.btn=="sq")
    {
        resp.send(`Square:${parseInt(req.query.n1)*parseInt(req.query.n1)}<br><a href="/">task</a>`);
    }


})

app.listen(3002,()=>{console.log("connecton created")})

