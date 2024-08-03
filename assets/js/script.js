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


    // Project Section

    const videoToggles = document.querySelectorAll('.video-toggle');
    
    videoToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            const videoElement = this.closest('.project-card').querySelector('.project-video');
            
            if (videoElement.style.display === 'none') {
                videoElement.style.display = 'block';
                this.textContent = 'Hide Demo';
                videoElement.play();
            } else {
                videoElement.style.display = 'none';
                this.textContent = 'Watch Demo';
                videoElement.pause();
            }
        });
    });


});



document.addEventListener('DOMContentLoaded', function() {

});

