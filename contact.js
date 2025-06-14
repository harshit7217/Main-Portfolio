document.getElementById("sendButton").addEventListener("click", function () {
    var params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_ryss2zi", "service_ryss2zi", params, "A4zKrFMMPbR7ug_ns")
        .then(function (response) {
            alert("Email sent successfully!");
        }, function (error) {
            alert("Failed to send email: " + error);
        }
    );
});
