// scripts.js

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animations
const projects = document.querySelectorAll('.project');
projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.2}s`;
    project.classList.add('fade-in');
});

// Fade in effect for projects
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

projects.forEach(project => {
    observer.observe(project);
});
