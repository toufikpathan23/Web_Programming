
const express=require("express")
const app=express();// express applicayion created
const path=require("path");
const parser=require("body-parser");
//middlewares

app.use(parser.urlencoded({extended:false}))

app.get("/",(req,resp)=>{

    resp.sendFile(path.join(__dirname,"/form.html"));
})

app.get("/task",(req,resp)=>{
    // console.log(req);
    if(req.query.btn=="add")
    {
        resp.send(`Addition:${parseInt(req.query.n1)+parseInt(req.query.n2)}<br><a href="/">task</a>`);
    }else if(req.query.btn=="sub")
    {
        resp.send(`Substraction:${parseInt(req.query.n1)-parseInt(req.query.n2)}<br><a href="/">task</a>`);
    }else if(req.query.btn=="mul")
    {
        resp.send(`Multiplication:${parseInt(req.query.n1)*parseInt(req.query.n2)}<br><a href="/">task</a>`);
    }else if(req.query.btn=="div")
    {
        resp.send(`Division:${parseInt(req.query.n1)/parseInt(req.query.n2)}<br><a href="/">task</a>`);
    }else if(req.query.btn=="sq")
    {
        resp.send(`Square:${parseInt(req.query.n1)*parseInt(req.query.n1)}<br><a href="/">task</a>`);
    }


})

app.listen(3002,()=>{console.log("connecton created")})

