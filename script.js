// ===============================
// Mobile Navigation
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// ===============================
// Close Mobile Menu After Clicking
// ===============================

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent =
        "Thanks! Your message has been submitted.";

    contactForm.reset();
});


// ===============================
// Dynamic Copyright Year
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();