# Interstellar Explorer

Interstellar explorer is an app that utilizes the MVC design pattern as well as and SQL database and express to allow the user to dynamically create objects (in this case planets) and then edit or delete them. The information entered on the app is relayed to a database and then the page is reloaded with the new information.

## Table of Contents

* Installation and Usage
* Dependencies and Code Snippet
* Languages used
* Author
* License
* Acknowledgements

### Installation and Usage

This app is deployed for use via Heroku at the link located at the top of this page. It can also be run locally via node and mysql Workbench once the dependencies are installed.

### Dependencies and Code Snippet

This app uses the following dependencies:
npm express (for routing to different pages and using GET, PUT, POST, and DELETE routes)
npm mysql (for making sql queries back to the primary database)
npm express-handlebars (for displaying the information via html)

Here is an example of the code utilized in this app. Ths particular code is for creating a new instance of a 'planet':

```
$(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newPlanet = {
            name: $("#plan").val().trim(),
            size: $("#size").val().trim(),
            color: $("#color").val().trim(),
            gas: $("[name=gas]:checked").val().trim(),
            explored: 0
        };

        // Send the POST request
        $.ajax("/api/planets", {
            type: "POST",
            data: newPlanet
        }).then(
            function() {
                console.log("Created a new planet");
                // Reload the page
                location.reload();
            }
        );
    });
```

## Languages Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Author

* Sam Poppe 

- [Link to Portfolio Site](https://popsizzle.github.io/Portfolio/)
- [Link to Github](https://github.com/PopSizzle)
- [Link to LinkedIn](https://www.linkedin.com/in/sam-poppe-623281193/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Hat tip to my teacher Jerome Chenette and my TAS Kerwin Hy and Mahisha Gunasekaran for teaching me all the skills needed for this project.