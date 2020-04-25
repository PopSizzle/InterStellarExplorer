// Import our ORM
let orm = require("../config/orm.js");

let planet = {
    all: function(cb) {
        orm.all("planets", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("planets", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("planets", objColVals, condition, function(res) {
            cb(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete("planets", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = planet;