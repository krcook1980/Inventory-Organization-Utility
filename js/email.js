var recipient = "";
var type = localStorage.getItem("materialChoice");
var width = localStorage.getItem("width");
var thick = localStorage.getItem("plateThickness");
var quantity = localStorage.getItem("quantity");
var action = localStorage.getItem("Action");

$(".recipient").change(function () {
    recipient = $(".recipient").val();
    if (action === "Pickup") {
        if (type === "Plate"){
            $(".textarea").append(" " + recipient + ", I have used " + quantity + ", " + width + " inch " + thick +" inch thick " + type + "s.");
        }
        else {
        $(".textarea").append(" " + recipient + ", I have used " + quantity + ", " + width + " inch " + type + ".");
        }
    }
    else {
        if (type === "Plate"){
            $(".textarea").append(" " + recipient + ", I have used " + quantity + ", " + width + " inch " + thick +" inch thick " + type + "s.");
        }
        else {
            $(".textarea").append(" " + recipient + ", I have delivered " + quantity + ", " + width + " " + type + ".");
        }
    }       
})

$(".emailButton").click(function () {
    // alert("working");
    Email.send({
        SecureToken: "8bdfc5e6-1f38-4818-a994-73f350628a8e",
        To: 'jasoncjorgensen@gmail.com',
        From: "inventory@hafabricators.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(function (message) {
        
        console.log(message);

        $(".emailNotification").append("<p>" + message + "</p>");
    })
    //   message => console.log(message)
    //   $(".emailNotification").append("<p>"+message+"</p>")


});


