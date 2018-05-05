const express = require('express');
var router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const burgerObject = {
            burgers: data
        }
        res.render("index", burgerObject);
    })
});

router.post("/burgers/add", function(req, res) {
    console.log(res)
    burger.insertOne([
        //insertOne Columns
        "burger_name", "devoured"
        ],
        [
        //insertOne Values
        req.body.burger_name, false
        ],
        //insertOne callback function
        function() {
            res.redirect("/");
        })
});

router.put("/burgers/update/:id" , function(req, res) {
    console.log(this.burger_name);
    burger.updateOne([
        //updateOne ObjToVal
        " devoured = true ", 
        ],
        [
        //updateOne Condition
        "id = " + req.params.id
        ],
        //updateOne callback function
        function() {
            res.redirect("/");
        })
});

module.exports = router;