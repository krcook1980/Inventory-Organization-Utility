var recipient = "";
var emailBodyText= "";
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

})

$(".emailButton").click(function () {
    var emailAddress = "";
    if (recipient=="Jason"){
        emailAddress = 'jasoncjorgensen@gmail.com'
    }else if (recipient=="Bret"){
        emailAddress = "kelly_cook1@msn.com"
    }
    Email.send({
        SecureToken: "8bdfc5e6-1f38-4818-a994-73f350628a8e",
        To: emailAddress,
        From: "inventory@hafabricators.com",
        Subject: action +" of "+type,
        Body: $(".emailBody").val()
    }).then(function (message) {
        $(".emailNotification").empty();
        console.log(message);
        if (message=="OK"){
            $(".emailNotification").append("<br>");
            $(".emailNotification").append("<p>"+"Email sent successfully!"+"</p>");
        }
        else {
            $(".emailNotification").append("<br>");
            $(".emailNotification").append("<p>"+"EMAIL ERROR"+"</p>")
        }
    })
    //   message => console.log(message)
    //   $(".emailNotification").append("<p>"+message+"</p>")


});


