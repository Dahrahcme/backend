var express = require("express");
var app = express();

app.get("/", (req, res)=>{
    console.log("I am back, it is working now on app");
    res.json({
        One: {
            name: "Adebayo Amoo",
            nationlity: "Nigerian",
            age: "40",
            state: "Ogun"
        },
        Two: {
            name: "Alao Akanni",
            nationlity: "Nigerian",
            age: "60",
            state: "Oyo"
        } 
    })
})

app.listen(2000, ()=>{
    console.log("Retrying the task");
})