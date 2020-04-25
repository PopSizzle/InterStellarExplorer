$(function() {
    $(".change-status").on("click", function(event) {
        let id = $(this).data("id");
        let isDiscovered = $(this).data("isDiscovered");

        let newDiscoveryState = {
            explored: isDiscovered
        };

        // Send the PUT reques
        $.ajax("/api/planets/" + id, {
            type: "PUT",
            data: newDiscoveryState
        }).then(
            function() {
                console.log("changed planet to", isDiscovered);

                // Reload the page
                location.reload();
            }
        );
    });

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

    $(".delete-planet").on("click", function(event) {
        const id = $(this).data("id");

        // Send the DELETE request
        $.ajax("/api/planets/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted planet", id);
                // reload the page
                location.reload();
            }
        );
    });
});
