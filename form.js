function goBack() {
    window.history.back();
}

document.getElementById("eventForm").addEventListener("submit", function(eventType) {
    eventType.preventDefault();

    let phone = document.getElementById("phone").value.trim();
    let phoneError = document.getElementById("phoneError");

    // Validate WhatsApp number format
    let phonePattern = /^\+\d{10,15}$/;
    if (!phonePattern.test(phone)) {
        phoneError.style.display = "block";
        return;
    } else {
        phoneError.style.display = "none";
    }

    // Collecting form data
    const parishName = document.getElementById("parish").value.trim();
    const event = document.getElementById("event").value.trim();
    const fullName = document.getElementById("name").value.trim();
    const position = document.getElementById("position").value.trim();
    const message = document.getElementById("message").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const phoneNumber = phone;
    const location = document.getElementById("location").value.trim();

    // Prepare the data object
    const formData = {
        parishName: parishName,
        event: event,
        position: position,
        message: message,
        phoneNumber: phoneNumber,
        fullName: fullName,
        location: location,
        gender: gender
    };

    // Send data to SheetDB API
    fetch('https://sheetdb.io/api/v1/7m83zwkt6x73u', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Form data successfully submitted:", data);
        
        // Trigger the success notification
        const successNotification = document.getElementById('successNotification');
        successNotification.classList.add('show');

        // Hide the notification after 5 seconds
        setTimeout(() => {
            successNotification.classList.remove('show');
        }, 5000);

        eventType.target.reset(); // Reset form after submission
    })
    .catch(error => {
        console.error("Error submitting form data:", error);
        alert("There was an error submitting the form.");
    });
});