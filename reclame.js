function sendMail(){
    window.alert("oi")
    /*
    var parametros = {
        from_name : document.getElementById("nome").value,
        email_id: document.getElementById("email_id").value,
        message : document.getElementById("message").value,
        reply_to: "retalhooficial@gmail.com",
    };
    emailjs.send("service_h58z8qe","template_bp4j2yh", parametros).then(function(res){
        alert("Success!" + res.status)
    });*/
    emailjs.send("service_h58z8qe","template_bp4j2yh",{
        from_name: document.getElementById("nome").value,
        email_id: document.getElementById("email_id").value,
        message:  document.getElementById("message").value,
    });

};