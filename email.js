
$(".btn").click(function(){
    // alert("working");
    Email.send({
        Host : "smtp.gmail.com",
        Username : "peanutbutterkellys2021@gmail.com",
        Password : "peanutbutterkellys",
        To : 'jasoncjorgensen@gmail.com',
        From : "inventory@hafabricators.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
      
    );


})