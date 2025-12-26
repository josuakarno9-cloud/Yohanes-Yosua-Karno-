// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavbar();
    initScrollAnimations();
    initSkillBars();
    initBackToTop();
    initContactForm();
    initImageHoverEffects();
    initTypingAnimation();
    initMobileMenu();
    
    // Simulate download CV button
    document.getElementById('downloadCV').addEventListener('click', function(e) {
        e.preventDefault();
        alert('CV akan segera diunduh. Untuk saat ini, fitur ini masih dalam pengembangan. Hubungi saya langsung untuk mendapatkan CV lengkap.');
    });
});

// Navbar scroll effect
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(15, 15, 30, 0.95)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.backgroundColor = 'rgba(15, 15, 30, 0.9)';
            navbar.style.padding = '20px 0';
        }
    });
}

// Fade-in animations on scroll
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add fade-in class to elements that should animate on scroll
    document.querySelectorAll('.skill-card, .portfolio-card, .contact-item, .info-item').forEach(el => {
        el.classList.add('fade-in');
    });
}

// Animate skill bars when in view
function initSkillBars() {
    const skillBars = document.querySelectorAll('.level-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = level + '%';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form submission
function initContactForm() {
    const contactForm = document.getElementById('messageForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For demo purposes, we'll just show an alert
            alert(`Terima kasih ${name}! Pesan Anda telah berhasil dikirim. Saya akan membalas ke email ${email} segera.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Image hover effects
function initImageHoverEffects() {
    // Profile image hover effect
    const profileImg = document.getElementById('profileImg');
    const aboutImg = document.getElementById('aboutImg');
    
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    if (aboutImg) {
        aboutImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        aboutImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// Typing animation for hero text
function initTypingAnimation() {
    // The typing animation is handled by CSS
    // This function is just a placeholder in case we want to add more complex typing logic
    console.log('Typing animation initialized');
}

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            });
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});