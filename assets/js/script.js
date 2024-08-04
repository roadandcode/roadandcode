document.addEventListener('DOMContentLoaded', function () {


    // Nav links

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });


    // Skills Cards Section

    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                const progressBar = entry.target.querySelector('.skill-progress');
                progressBar.style.width = progressBar.style.width;
            }
        });
    }, { threshold: 0.1 });

    skillCards.forEach(card => {
        observer.observe(card);
    });




    // Element in focus on mubile device

    // Project Section

    const projects = document.querySelectorAll('.project-card');

    // Check if the device is a mobile device
    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    if (isMobile) {
        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Creating an array [0, 0.01, ..., 1.0]
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const visibilityRatio = entry.intersectionRatio;

                // Check if the visibility is greater than 50% for visible
                if (visibilityRatio > 0.9) {
                    entry.target.classList.add('visible');
                } else {
                    // Check if the visibility is less than 20% for not-visible
                    if (visibilityRatio < 0.5) {
                        entry.target.classList.remove('visible');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        projects.forEach(card => {
            observer.observe(card);
        });
    }

});



document.addEventListener('DOMContentLoaded', function () {

});

