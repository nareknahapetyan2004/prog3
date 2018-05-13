var express = require("express");
var app = express();


app.use(express.static("your_project_folder_name"));

app.get("/", function(req, res)
{
   res.redirect("your_project_html_name");
});

app.listen(3000, function()
{
   console.log("Example is running on port 3000");
});

var eater = require("Gishatic.js");
var grass = require("Grass.js");
var mard = require("Mard.js");
var xotaker = require("Eatgrass.js");
