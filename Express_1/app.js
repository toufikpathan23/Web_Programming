//add library
const express=require("express")
const app=express()
const router=require("./router/routers")
const bodyParser=require("body-parser")

//add middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//cors setting

app.use(function(req,resp,next){
    resp.setHeader('Access-Control-Allow-Origin','*');
    resp.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
    resp.setHeader('Access-Control-Allow-Headers','Content-Type');
    resp.setHeader('Access-Control-Allow-Credetials',true);
    next();

})

//add url handler
app.use("/",router)

app.listen(3002,function(){
    console.log("server running at 3002")
})

module.exports=app;

