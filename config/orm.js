var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}
 
var orm = {
    selectAll: function(tableName, cb) {
        let queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            } 
            cb(result)
        })
    },
    insertOne: function(tableName, columns, values, cb) {
        let queryString = "INSERT INTO " + tableName;
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ");";
        connection.query(queryString, values, function(err, result) {
            if (err) {
            throw err;
            }

            cb(result);
        });
    },
    updateOne: function(tableName, objColVal, condition, cb) {
        let queryString = "UPDATE " + tableName;
        queryString += " SET ";
        console.log("OBJCOLVAL:", objColVal[0])
        queryString += objColVal[0];
        queryString += " WHERE ";
        queryString += condition
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            } 
            cb(result)
        })
    }
}

module.exports = orm;