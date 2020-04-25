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
        "name", "size", "gas", "color", "explored"
    ], [
        req.body.name, req.body.size, req.body.gas, req.body.color, req.body.explored
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    planet.update({
      explored: req.body.explored
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
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