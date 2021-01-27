

$(".emailButton").click(function(){
    // alert("working");
    Email.send({
    SecureToken : "8bdfc5e6-1f38-4818-a994-73f350628a8e",
    To : 'jasoncjorgensen@gmail.com',
    From : "inventory@hafabricators.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(function(message){
    console.log(message)
    $(".emailNotification").append("<p>"+message+"</p>")
}
//   message => console.log(message)
//   $(".emailNotification").append("<p>"+message+"</p>")

);
});


