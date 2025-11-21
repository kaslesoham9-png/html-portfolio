/* SCROLL FADE LOGIC */
const panels = document.querySelectorAll(".panel");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                panels.forEach(p => p.classList.remove("active"));
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.6 }
);

panels.forEach(panel => observer.observe(panel));

function nextSection() {
    const container = document.getElementById("scroll-container");
    const panels = [...document.querySelectorAll(".panel")];

    const currentScroll = container.scrollTop;
    const nextPanel = panels.find(
        p => p.offsetTop > currentScroll + 10
    );

    if (nextPanel) {
        container.scrollTo({ 
            top: nextPanel.offsetTop, 
            behavior: "smooth" 
        });
    }
}

/* PARTICLES */
const particleContainer = document.getElementById("particles");

for (let i = 0; i < 60; i++) {
    let p = document.createElement("div");
    p.classList.add("particle");

    let size = Math.random() * 6 + 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${Math.random() * 8 + 5}s`;
    p.style.animationDelay = `${Math.random() * 5}s`;

    particleContainer.appendChild(p);
}

// Web3Forms Integration
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    data.access_key = "45e5ae9e-d275-4c0a-93f0-a33394a91d1f";

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if(result.success) {
        document.getElementById("formStatus").innerText = "Message sent successfully!";
        form.reset();
    } else {
        document.getElementById("formStatus").innerText = "Oops! Something went wrong.";
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

    const nav = document.querySelector('.left-nav');
    const btn = document.getElementById('navToggle');

    btn.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });