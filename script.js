var express = require("express");
var app = express();
var search = "Tumo";

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/fasebook",function(req,res){
    res.send("Hello Fasebook");
});
app.get("/name/:anun", function(req, res){
   var name = req.params.anun;
   res.send("<h1>Hello " + name +"</h1>");
});
app.get("/google" ,function(req,res){
    res.redirect("https://www.google.com/");
});
app.get("/google/search",function(req,res){
    res.redirect("https://www.google.com/search?q=" + search);
});
app.get("/*", function(req,res){
    res.send("<h1>404 error</h1>");
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
