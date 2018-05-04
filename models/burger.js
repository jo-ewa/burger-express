const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    insertOne: function(column, value, cb) {
        orm.insertOne("burgers", column, value, function() {
            cb(res);
        })
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function() {
            cb(res);
        }) 
    }
}

module.exports = burger;