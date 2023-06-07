const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = [];
const workItems = [];

app.get("/", function(req, res){
    
    let day = date.getDayEng();

    res.render("index", {
        dayName: day,
        newListItems: items
    });
})

app.get("/work", function(req, res){

    res.render("index", {
        dayName: "Work",
        newListItems: workItems
    })

})

app.post("/", function(req, res){

    let nitem = req.body.newItem;

    let btnName = req.body.btn;

    if(btnName === "Work"){
        workItems.push(nitem);
        res.redirect("/work");
    }else{
        items.push(nitem);
        res.redirect("/");
    }

})

app.listen(3000, function(){
    console.log("Server has started on PORT 3000");
})