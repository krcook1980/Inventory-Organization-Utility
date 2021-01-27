$(document).ready(function () {

    $(".selectType").change(function () {

        if ($(this).val() === "Plate") {
            $(".selectWidth").empty();

            $(".selectWidth").append("<option value='5'>5 inch</option>");
            $(".selectWidth").append("<option value='6'>6 inch</option>");
            $(".selectWidth").append("<option value='8'>8 inch</option>");
            $(".selectWidth").append("<option value='12'>12 inch</option>");

            $("#thick").removeClass("is-hidden");
            $("#thick").addClass("is-visible");
            $(".selectThick").empty();
            $(".selectThick").append("<option value='.25'> 1/4 inch</option");
            $(".selectThick").append("<option value='.5'> 1/2 inch</option");
            $(".selectThick").append("<option value='.75'> 3/4 inch</option");

        } else {
            $(".selectWidth").empty();

            $(".selectWidth").append("<option value='3'>3 inch</option>");
            $(".selectWidth").append("<option value='4'>4 inch</option>");
            $(".selectWidth").append("<option value='6'>6 inch</option>");
        }


    })

    /////////// PICKUP BUTTON FUNCTION START ////////////
    $(".pickUpBTN").click(function () {

        // console.log("Pickup Button Clicked");
        // Setting values to be populated on click
        var materialChoice = $(".materials").val();
        var width = $(".selectWidth").val();
        var quantity = $(".quantityInput").val();
        var plateThickness = $(".selectThick").val();

        // logging console choices
        console.log(materialChoice);
        console.log(width);
        console.log(quantity);
        console.log(plateThickness);

        // writing values to local storage
        localStorage.setItem('materialChoice', materialChoice);
        localStorage.setItem('width', width);
        localStorage.setItem('plateThickness', plateThickness);
        localStorage.setItem('quantity', quantity);
        localStorage.setItem("Action", "Pickup");

    });
    /////////// PICKUP BUTTON FUNCTION STOP ////////////

    $(".dropOffBTN").click(function () {

        // Setting values to be populated on click
        var materialChoice = $(".materials").val();
        var width = $(".selectWidth").val();
        var quantity = $(".quantityInput").val();
        var plateThickness = $(".selectThick").val();


        // logging console choices
        console.log(materialChoice);
        console.log(width);
        console.log(quantity);
        console.log(plateThickness);

        // writing values to local storage
        localStorage.setItem('materialChoice', materialChoice);
        localStorage.setItem('width', width);
        localStorage.setItem('plateThickness', plateThickness);
        localStorage.setItem('quantity', quantity);
        localStorage.setItem("Action", "DropOff");



    });




    // $(".pickup").click(pickUp);
    // $(".dropoff").click(dropOff);


})