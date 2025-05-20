document.addEventListener('DOMContentLoaded', function() {
    // Menu Icon Toggle
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('fa-x');
            navbar.classList.toggle('active');
        });
    }

    // Scroll Sections Active Link with Debounce
    function handleScroll() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');
        const header = document.querySelector('header');
        
        // Sticky Navbar
        header.classList.toggle('sticky', window.scrollY > 100);
        
        // Active link highlighting
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            }
        });

        // Close mobile menu on scroll
        if (menuIcon) {
            menuIcon.classList.remove('fa-x');
            navbar.classList.remove('active');
        }
    }

    // Debounce scroll events for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 50);
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                menuIcon.classList.remove('fa-x');
                navbar.classList.remove('active');
            }
        });
    });

    // Initialize ScrollReveal with optimized timing
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            reset: false, // Changed to false for better UX
            distance: '60px',
            duration: 1200, // Reduced from 2000ms
            delay: 150,     // Reduced from 200ms
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Smoother curve
            mobile: false  // Disable on mobile for performance
        });

        // Staggered reveal animations with optimized timing
        sr.reveal('.home-content h3', { 
            origin: 'top',
            delay: 150,
            distance: '40px'
        });
        
        sr.reveal('.home-content h1', {
            origin: 'left',
            delay: 300,
            distance: '60px'
        });
        
        sr.reveal('.home-content p', {
            origin: 'right',
            delay: 450,
            distance: '50px'
        });
        
        sr.reveal('.social-media, .btn', {
            origin: 'bottom',
            delay: 600,
            interval: 150
        });
        
        sr.reveal('.home-img', {
            origin: 'bottom',
            delay: 750,
            distance: '80px'
        });
        
        sr.reveal('.about-img', {
            origin: 'left',
            delay: 200,
            distance: '80px'
        });
        
        sr.reveal('.about-content', {
            origin: 'right',
            delay: 400,
            distance: '60px'
        });
        
        sr.reveal('.services-box', {
            origin: 'bottom',
            delay: 200,
            interval: 100,
            distance: '50px'
        });
        
        sr.reveal('.portfolio-box', {
            origin: 'bottom',
            delay: 200,
            interval: 150,
            distance: '60px'
        });
        
        sr.reveal('.contact form', {
            origin: 'bottom',
            delay: 300,
            distance: '60px'
        });
    }

    // Initialize Typed.js with faster timing
    if (typeof Typed !== 'undefined') {
        new Typed('.multiple-text', {
            strings: ['Software Engineer'],
            typeSpeed: 70,       // Faster typing (original: 100)
            backSpeed: 60,       // Faster backspacing (original: 100)
            backDelay: 800,      // Slightly shorter pause (original: 1000)
            startDelay: 500,     // Initial delay before typing starts
            loop: true,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true
        });
    }

    // Optimized floating animation timing
    const homeImg = document.querySelector('.home-img img');
    if (homeImg) {
        homeImg.style.animation = 'floatImage 3s ease-in-out infinite'; // Reduced from 4s
    }
});

// Improved floating animation timing
const style = document.createElement('style');
style.textContent = `
    @keyframes floatImage {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-2rem); // Reduced from -2.4rem for subtler effect
        }
    }
`;
document.head.appendChild(style);