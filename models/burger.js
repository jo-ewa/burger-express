const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    insertOne: function(columns, values, cb) {
        orm.insertOne("burgers", columns, values, function(res) {
            cb(res);
        })
    },
    updateOne: function(objColVals, condition, cb) {
        console.log(objColVals);
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        }) 
    }
}

module.exports = burger;