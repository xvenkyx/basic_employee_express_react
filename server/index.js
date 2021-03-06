const express = require ("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "tyghbn@1A",
    database: "new_schema"
});

app.post("/create",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query("INSERT INTO employee (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name,age,country,position,wage],(err,result)=>{
        if (err){
            console.log(err);
        } else {
            res.send("values inserted !");
        }
    });
});

app.get("/employees",(req,res)=>{
    db.query("SELECT * FROM employee",(err,result)=>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001,()=>{
    console.log("running on port 3001");
});