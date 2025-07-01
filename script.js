// Function to close alert box after 8 seconds
window.onload = function() {
    setTimeout(() => {
        document.getElementById("alertBox").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("alertBox").style.display = "none";
        }, 1000);
    }, 8000);
};
// Function to navigate to the specified page
function navigateTo(page) {
    window.location.href = page;
}