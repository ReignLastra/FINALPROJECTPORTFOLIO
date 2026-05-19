// script.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (This is a simulation; in a real app, this would send an email.)');
        contactForm.reset();
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
