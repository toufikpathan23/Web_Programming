
const express=require("express")
const router=express.Router();
const connection=require("../db/connection.js");
const { json } = require("body-parser");

router.get("/employees",(req,resp)=>{
    console.log("in get method")
    connection.query("select * from employee",(err,data)=>{
        if(err)
        {
            console.log("mysql error"+JSON.stringify(err))
        }
        else{
            console.log(data);
            resp.send(data)
        }
    })
})

router.get("/employees/:empid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.empid],(err,result)=>{
        if(err)
        {
            console.log("mysql error"+JSON.stringify(err))
            resp.status(500).send("data not found due to error"+JSON.stringify(err))
        }
        else
        {
            if(result==null)
            {
                resp.send("could not insert successfully")
            }
            resp.send(result)
        }
    })
})

router.post("/employees/add",(req,resp)=>{
    connection.query("insert into employee values(?,?,?)",[req.body.empid,req.body.empname,req.body.sal],(err,result)=>{

        if(err)
        {
            console.log("err in post"+JSON.stringify(err))
        }
        else
        {
            if(result==null)
            {
                resp.send("could not insert successfully")
            }
            resp.send("inserted successfully")
        }
    })
})

router.put("/employees/:empid",(req,resp)=>{

    console.log("hiii")
    connection.query("update employee set empname=?,sal=? where empid=?",[req.body.empname,req.body.sal,req.body.empid],(err,result)=>{
        if(err)
        {
            resp.status(500).send("error"+JSON.stringify(err));
        }
        else
        {
           if(result.affectedRows>0)
           {
            resp.send("Inserted successfully");
           }
           else{
            resp.send("not inserted");
           }
        }
    })
})

router.delete("/employees/:empid",(req,resp)=>{

    connection.query("delete from employee where empid=?",[req.params.empid],(err,result)=>{
        if(err)
        {
            resp.status(500).send("error"+JSON.stringify(err));
        }
        else
        {
           if(result.affectedRows>0)
           {
            resp.send("deleted successfully");
           }
           else{
            resp.send("not deleted");
           }
        }
        
    })
})
module.exports=router;