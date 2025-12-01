// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links a");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(el => observer.observe(el));

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
