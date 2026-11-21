
// ELEMENTS
const intro = document.getElementById("intro");
const mainWebsite = document.getElementById("mainWebsite");
const openGift = document.getElementById("openGift");

const music = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");


// OPEN SURPRISE
openGift.addEventListener("click", async () => {

    intro.classList.add("hidden");
    mainWebsite.classList.remove("hidden");
    musicToggle.classList.remove("hidden");

    window.scrollTo(0, 0);

    // Start music after user interaction
    try {
        await music.play();
        musicToggle.textContent = "♫ MUSIC ON";
    } catch (error) {
        musicToggle.textContent = "♫ PLAY MUSIC";
        console.log("Music could not start:", error);
    }

});


// MUSIC ON / OFF
musicToggle.addEventListener("click", async () => {

    if (music.paused) {
        try {
            await music.play();
            musicToggle.textContent = "♫ MUSIC ON";
        } catch (error) {
            console.log("Music playback failed:", error);
        }
    } else {
        music.pause();
        musicToggle.textContent = "♫ MUSIC OFF";
    }

});


// FLOATING GOLD PARTICLES
const particles = document.getElementById("particles");

function createParticles() {

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("div");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (Math.random() * 6 + 5) + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particles.appendChild(particle);

    }

}

createParticles();


// PHOTO GALLERY LIGHTBOX
const photos = document.querySelectorAll(".photo-card img");

photos.forEach((photo) => {

    photo.addEventListener("click", () => {

        lightboxImage.src = photo.src;
        lightboxImage.alt = photo.alt;

        lightbox.classList.add("active");

    });

});


// CLOSE PHOTO
document.getElementById("closeLightbox")
    .addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});


// CONFETTI CELEBRATION
function celebrateBirthday() {

    const colors = [
        "#d6ad60",
        "#f9df9b",
        "#ffffff",
        "#c18c37"
    ];

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";

        confetti.style.width = "8px";
        confetti.style.height = "12px";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.zIndex = "200";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const horizontalMovement = (Math.random() - 0.5) * 300;
        const duration = 2000 + Math.random() * 2000;

        const animation = confetti.animate(
            [
                {
                    transform: "translate(0, 0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translate(${horizontalMovement}px, 100vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        animation.onfinish = () => confetti.remove();

    }

}


// CELEBRATE BUTTON
document.getElementById("celebrate")
    .addEventListener("click", () => {

        celebrateBirthday();

    });
