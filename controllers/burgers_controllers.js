const express = require('express');
var router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {
    res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
	burger.selectAll(function(data){
		var burgerObject = {
            burgers: data
        }
		res.render('index', burgerObject);
	})
});

router.post("/burgers/add", function(req, res) {
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
            res.redirect("/burgers");
        })
});

router.post("/burgers/update/:id" , function(req, res) {
    burger.updateOne([
        //updateOne ObjToVal
        "devoured = true", 
        ],
        [
        //updateOne Condition
        "id = " + req.params.id
        ],
        //updateOne callback function
        function() {
            res.redirect("/burgers");
        })
});

module.exports = router;