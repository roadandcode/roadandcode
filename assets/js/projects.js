// Projects-specific JavaScript can be added here
document.addEventListener('DOMContentLoaded', () => {
    // Sample project data (replace with actual data)
    const projectData = {
        name: "Awesome Game Project",
        summary: "An exciting adventure game that takes players on a journey through a magical world.",
        gamePattern: "Open World RPG",
        principle: "Player-driven narrative",
        techUsed: "Unity3D, C#, Blender",
        imageSrc: "https://via.placeholder.com/600x400",
        downloads: {
            android: "https://example.com/download/android",
            windows: "https://example.com/download/windows",
            webgl: "https://example.com/play/webgl"
        }
    };

    // Update DOM elements with project data
    document.getElementById('project-name').textContent = projectData.name;
    document.getElementById('project-summary').textContent = projectData.summary;
    document.querySelector('#game-pattern span').textContent = projectData.gamePattern;
    document.querySelector('#principle span').textContent = projectData.principle;
    document.querySelector('#tech-used span').textContent = projectData.techUsed;
    document.getElementById('showcase-image').src = projectData.imageSrc;

    // Add click events to download buttons
    document.getElementById('android-download').addEventListener('click', () => {
        window.location.href = projectData.downloads.android;
    });

    document.getElementById('windows-download').addEventListener('click', () => {
        window.location.href = projectData.downloads.windows;
    });

    document.getElementById('webgl-play').addEventListener('click', () => {
        window.location.href = projectData.downloads.webgl;
    });

    // Add scroll reveal animation
    const sections = document.querySelectorAll('section');
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        sectionObserver.observe(section);
    });
});