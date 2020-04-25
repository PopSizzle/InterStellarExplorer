const express = require("express");

const router = express.Router();

// Import planet model
const planet = require("../models/planet.js");

// Create routes

router.get("/", function(req, res) {
    planet.all(function(data) {
        
        let dataObject = {
            planets: data
        };

        console.log(dataObject);
        res.render("index", dataObject)
    });
});

router.post("/api/planets", function(req, res) {
    planet.create([
        "name", "size", "gas", "color"
    ], [
        req.body.name, req.body.size, req.body.gas, req.body.color
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.delete("/api/cats/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    planet.delete(condition, function(result) {
        if (result.affected == 0) {
            // If no rows changed, send a 404 error.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes
module.exports = router;