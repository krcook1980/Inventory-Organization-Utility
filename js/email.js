

var material = localStorage.getItem("materialChoice");
var width = localStorage.getItem("width");
var plateThickness = localStorage.getItem("plateThickness");
var quantity = localStorage.getItem("quantity");
var action = localStorage.getItem("Action");






$(".emailButton").click(function(){
    // alert("working");
    Email.send({
    SecureToken : "8bdfc5e6-1f38-4818-a994-73f350628a8e",
    To : 'jasoncjorgensen@gmail.com',
    From : "inventory@hafabricators.com",
    Subject : action +" of "+material,
    Body : "And this is the body"
}).then(function(message){
    console.log(message)
    if (message=="OK"){
        $(".emailNotification").append("<p>"+"Email sent successfully!"+"</p>");
    }
    else {
        $(".emailNotification").append("<p>"+"EMAIL ERROR"+"</p>")
    }
}
//   message => console.log(message)
//   $(".emailNotification").append("<p>"+message+"</p>")

);
});


