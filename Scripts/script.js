<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section, .fade-in');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Adjust to determine when to trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class when in view
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});


const toggleButton = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show-menu'); // Toggles the 'show-menu' class
    toggleButton.setAttribute('aria-expanded', isOpen); // Updates aria-expanded
    dropdownMenu.setAttribute('aria-hidden', !isOpen); // Updates aria-hidden
});

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior
        const targetClass = this.getAttribute('data-target');
        const targetElement = document.querySelector(`.${targetClass}`);

        // Scroll to the section
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the navbar element
const navbar = document.querySelector('header nav');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // Add class when scrolled down
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    }
});
=======
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section, .fade-in');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Adjust to determine when to trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class when in view
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});


const toggleButton = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show-menu'); // Toggles the 'show-menu' class
    toggleButton.setAttribute('aria-expanded', isOpen); // Updates aria-expanded
    dropdownMenu.setAttribute('aria-hidden', !isOpen); // Updates aria-hidden
});

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior
        const targetClass = this.getAttribute('data-target');
        const targetElement = document.querySelector(`.${targetClass}`);

        // Scroll to the section
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the navbar element
const navbar = document.querySelector('header nav');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // Add class when scrolled down
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    }
});
>>>>>>> 702f97e4f60861b1b811a57f05a18bb1bf091db0
