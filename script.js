// ===== FAQ Accordion =====
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        // Close other answers
        document.querySelectorAll(".faq-answer").forEach(a => {
            if (a !== answer) {
                a.style.maxHeight = null;
                a.classList.remove("open");
                a.previousElementSibling.classList.remove("active");
            }
        });

        // Toggle current answer
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.classList.remove("open");
            button.classList.remove("active");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.classList.add("open");
            button.classList.add("active");
        }
    });
});

// ===== Smooth Scroll for Navigation (if you add nav links) =====
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== Button Glow Pulse Effect =====
const glowButton = document.querySelector(".get button");
if (glowButton) {
    setInterval(() => {
        glowButton.classList.toggle("pulse");
    }, 2000);
}

// ===== Entrance Animations =====
window.addEventListener("scroll", () => {
    document.querySelectorAll(".features, .about, .contact, .services, .testimonials, .team, .faq").forEach(section => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
});
