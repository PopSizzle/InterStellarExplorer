// Import connection
var connection = require("../connection.js");

// Question mark function for SQL strings
function printQuestionMarks(num) {
    const arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.tostring();
}

// Convert key value pairs to SQL
function objectToSql(obj) {
    const arr = [];

    for(var key in obj) {

        let element = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && element.indexOf(" ") >=0) {
                element = "'" + element + "'"; 
            }

            arr.push(key + "=" + element);
        }
    }

    return arr.toString();
}

// Object for SQL queries
let orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    
    create: function(table, cols vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
           if (err) {
                throw err;
           }

           cb(results);
        });
    },
    
    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    delete: function(table, condition, cb) {
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export ORM
module.exports = orm;