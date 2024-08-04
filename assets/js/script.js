document.addEventListener('DOMContentLoaded', function () {

    // Nav links
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    // Skills Cards Section
    const skillCards = document.querySelectorAll('.skill-card');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                const progressBar = entry.target.querySelector('.skill-progress');
                progressBar.style.width = progressBar.style.width;
            }
        });
    }, { threshold: 0.1 });

    skillCards.forEach(card => {
        skillObserver.observe(card);
    });

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
                if (visibilityRatio > 0.99) {
                    entry.target.classList.add('visible');
                    toggleGif(entry.target, true); // Play GIF when visible
                } else {
                    // Check if the visibility is less than 20% for not-visible
                    if (visibilityRatio < 0.88) {
                        entry.target.classList.remove('visible');
                        toggleGif(entry.target, false); // Pause GIF when not visible
                    }
                }
            });
        };

        const projectObserver = new IntersectionObserver(observerCallback, observerOptions);

        projects.forEach(card => {
            projectObserver.observe(card);
        });
    } else {
        // Add hover effect for desktop
        projects.forEach(card => {
            card.addEventListener('mouseenter', () => {
                toggleGif(card, true); // Play GIF on hover
            });

            card.addEventListener('mouseleave', () => {
                toggleGif(card, false); // Pause GIF when not hovered
            });
        });
    }

    /**
     * Toggles the GIF play/pause state.
     * @param {HTMLElement} card - The project card element.
     * @param {boolean} play - True to play the GIF, false to pause.
     */
    function toggleGif(card, play) {
        const gif = card.querySelector('.gif-img');
        const staticImg = card.querySelector('.static-img');

        if (gif && staticImg) {
            if (play) {
                staticImg.style.display = 'none'; // Hide static image
                gif.style.display = 'block'; // Show GIF
            } else {
                gif.style.display = 'none'; // Hide GIF
                staticImg.style.display = 'block'; // Show static image
            }
        }
    }




    // Form section for mailing
     const contactForm = document.getElementById('contactForm');
     const formStatus = document.getElementById('formStatus');
 
     if (contactForm) {
         contactForm.addEventListener('submit', function(e) {
             e.preventDefault();
             
             const name = document.getElementById('name').value.trim();
             const email = document.getElementById('email').value.trim();
             const message = document.getElementById('message').value.trim();
 
             if (!name || !email || !message) {
                 showStatus('Please fill in all fields.', 'error');
                 return;
             }
 
             if (!isValidEmail(email)) {
                 showStatus('Please enter a valid email address.', 'error');
                 return;
             }
 
             // Send email using EmailJS
             emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                 from_name: name,
                 from_email: email,
                 message: message
             }, "YOUR_USER_ID")
             .then(function(response) {
                 console.log('Email sent successfully:', response);
                 showStatus('Message sent successfully!', 'success');
                 contactForm.reset();
             }, function(error) {
                 console.error('Email send failed:', error);
                 showStatus('Failed to send message. Please try again later.', 'error');
             });
         });
     }
 
     function isValidEmail(email) {
         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(String(email).toLowerCase());
     }
 
     function showStatus(message, type) {
         formStatus.textContent = message;
         formStatus.className = `form-status ${type}`;
         setTimeout(() => {
             formStatus.textContent = '';
             formStatus.className = 'form-status';
         }, 3000);
     }

});
