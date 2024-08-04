document.addEventListener('DOMContentLoaded', function () {

    
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

    const projects = document.querySelectorAll('.projects');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // 50% of the element should be visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add the 'visible' class
                observer.unobserve(entry.target); // Optionally stop observing once visible
            }
        });
    };

    const projectsObserver = new IntersectionObserver(observerCallback, observerOptions);

    projects.forEach(card => {
        projectsObserver.observe(card); // Observe each project card
    });


});



document.addEventListener('DOMContentLoaded', function() {

});

