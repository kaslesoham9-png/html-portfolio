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
