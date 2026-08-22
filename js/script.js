const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const guests = document.querySelector("#guests").value;

    // Check required fields
    if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    // Phone number validation
const phonePattern = /^[0-9]{10,15}$/;

if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
}
// Successful reservation
alert("Your table has been reserved successfully!");

reservationForm.reset();
});
// Mobile Menu Toggle

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
// Order Now buttons

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const item = button.dataset.item;
        const price = button.dataset.price;

        alert(
            "You selected " + item +
            "\nPrice: Rs. " + price +
            "\n\nThank you for choosing Velvet Brew Cafe!"
        );

    });
});