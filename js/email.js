var recipient = "";
var type = localStorage.getItem("materialChoice");
var width = localStorage.getItem("width");
var thick = localStorage.getItem("plateThickness");
var quantity = localStorage.getItem("quantity");
var action = localStorage.getItem("Action");

// var emailBodyText = "Hello "+recipient;
// $(".emailBody").val(emailBodyText);

$(".recipient").change(function () {
    recipient = $(".recipient").val();
    var emailBodyText = "Hello "+recipient+", "+"\n"+"Action: "+action+"\n"+"Material: "+type+"\n"+"Quantity: "+quantity+"\n"+"Width: "+width+" inches";
    $(".emailBody").val(emailBodyText);
    // if (action === "Pickup") {
    //     if (type === "Plate"){
    //         $(".textarea").append(" " + recipient + ", I have used " + quantity + ", " + width + " inch " + thick +" inch thick " + type + "s.");
    //     }
    //     else {
    //     $(".textarea").append(" " + recipient + ", I have used " + quantity + ", " + width + " inch " + type + ".");
    //     }
    // }
    // else {
    //     if (type === "Plate"){
    //         $(".textarea").append(" " + recipient + ", I have used " + quantity + ", " + width + " inch " + thick +" inch thick " + type + "s.");
    //     }
    //     else {
    //         $(".textarea").append(" " + recipient + ", I have delivered " + quantity + ", " + width + " " + type + ".");
    //     }
    // }       
})

$(".emailButton").click(function () {
    // alert("working");
    Email.send({
        SecureToken: "8bdfc5e6-1f38-4818-a994-73f350628a8e",
        To: 'jasoncjorgensen@gmail.com',
        From: "inventory@hafabricators.com",
        Subject: action +" of "+type,
        Body: $(".emailBody").val()
    }).then(function (message) {
        console.log(message);
        if (message=="OK"){
            $(".emailNotification").append("<p>"+"Email sent successfully!"+"</p>");
        }
        else {
            $(".emailNotification").append("<p>"+"EMAIL ERROR"+"</p>")
        }
    })
    //   message => console.log(message)
    //   $(".emailNotification").append("<p>"+message+"</p>")


});


