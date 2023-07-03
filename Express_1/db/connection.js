var mysql=require("mysql")

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rafik@2000",
    port:3306,
    database:"test"
})

connection.connect((err)=>{
    if(err)
    {
        console.log("error occured"+JSON.stringify(err));
    }
    else{
        console.log("connected successfully")
    }

})

module.exports=connection;