document.getElementById("submit-button").addEventListener("click", function() {
    var form = document.getElementById("contact-form");
    var formData = new FormData(form);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            alert("Thank you! Your message has been sent.");
            form.reset();
        } else {
            alert("Oops! Something went wrong. Please try again later.");
        }
    };
    xhr.send(formData);
});
