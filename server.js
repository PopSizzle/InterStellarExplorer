const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Static content from Public folder
app.use(express.static("public"));

// Parse body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Require Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes so server can access them
const routes = require("./controllers/planetsController.js");

app.use(routes);

// Start server
app.listen(PORT, function() {
    // log when listening and on what port
    console.log("Server listening on: http://localhost:" + PORT);
});