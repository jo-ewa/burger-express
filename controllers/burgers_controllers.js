const express = require('express');
var router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const burgerObject = {
            burgers: data
        }
        console.log(burgerObject);
        res.render("index", burgerObject);
    })
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(function(data) {
        const burgerObject = {
            burgers: data
        }
        console.log(burgerObject);
        res.render("index", burgerObject);
    })
})

module.exports = router;