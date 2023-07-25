var express = require("express");
var myApp = express();

myApp.set("views engine", "ejs")

// const extra = {
//     title: "World",
//     message: "You are welcome to learn nodejs",
//     signature: "Backend Developer"
// }

myApp.get("/", (req,res)=>{
    console.log("Checking, checking");
    res.render("class.ejs", {text123: "World"})
})

myApp.listen(2022, ()=>{
    console.log("My class work");
})