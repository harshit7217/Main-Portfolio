document.getElementById("sendButton").addEventListener("click", function () {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_ryss2zi", "service_ryss2zi", params,) 
        .then(function (response) {
            alert("Email sent successfully!");
        }, function (error) {
            alert("Failed to send email: " + error);
        }
    );
});