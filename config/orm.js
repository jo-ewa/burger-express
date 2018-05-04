var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
}
 

var orm = {
    selectAll: function(tableName, cb) {
        const queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            } 
            cb(result)
        })
    },
    insertOne: function(tableName, columns, values, cb) {
        const queryString = "INSERT INTO " + tableName;
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ");";
        console.log(queryString);
        connection.query(queryString, values, function(err, result) {
            if (err) {
            throw err;
            }
            cb(result);
        });
    },
    updateOne: function(tableName, objColVal, condition, cb) {
        const queryString = "UPDATE "; + tableName;
        queryString += " SET ";
        queryString += objToSql(objColVal);
        queryString += " WHERE ";
        queryString += condition
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            } 
            cb(result)
        })
    }
}

module.exports = orm;