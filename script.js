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
    { threshold: 0.15 }
);

revealElements.forEach(el => observer.observe(el));

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Typewriter effect for tagline
const typingTarget = document.getElementById("typing-role");
const roles = [
    "Aspiring Software Engineer",
    "AI & ML Enthusiast",
    "Problem Solver",
    "ECE Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 90;
let pauseDelay = 1200;

function typeLoop() {
    if (!typingTarget) return;

    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingTarget.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTarget.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeLoop, pauseDelay);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const currentDelay = isDeleting ? typingDelay / 2 : typingDelay;
    setTimeout(typeLoop, currentDelay);
}

typeLoop();

// 3D tilt effect for cards
function addTiltEffect() {
    const tiltElements = document.querySelectorAll(".tilt");

    tiltElements.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        el.addEventListener("mouseleave", () => {
            el.style.transition = "transform 0.2s ease";
            el.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
            setTimeout(() => {
                el.style.transition = "";
            }, 200);
        });
    });
}

addTiltEffect();
