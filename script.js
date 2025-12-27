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
    
    // Initialize Robot 3D
    initRobot3D();
    
    // GSAP Scroll Animations
    initGSAPAnimations();
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
    document.querySelectorAll('.skill-card, .portfolio-card, .contact-item, .info-item, .robot-controls, .robot-info').forEach(el => {
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

// GSAP Animations
function initGSAPAnimations() {
    // Animate robot section on scroll
    gsap.registerPlugin(ScrollTrigger);
    
    // Robot section entrance animation
    gsap.from('.robot-section .section-title', {
        scrollTrigger: {
            trigger: '.robot-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.robot-section .section-subtitle', {
        scrollTrigger: {
            trigger: '.robot-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    // Button hover animations
    document.querySelectorAll('.control-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Robot 3D with Three.js
function initRobot3D() {
    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.error('Three.js not loaded');
        return;
    }
    
    // Scene setup
    const canvas = document.getElementById('robotCanvas');
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
    );
    camera.position.set(0, 2, 8);
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x6C63FF, 2, 20);
    pointLight.position.set(3, 5, 3);
    scene.add(pointLight);
    
    // Robot parts
    const robot = new THREE.Group();
    scene.add(robot);
    
    // Robot material
    const robotMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x6C63FF,
        metalness: 0.7,
        roughness: 0.2
    });
    
    // Body
    const bodyGeometry = new THREE.BoxGeometry(2, 3, 1.5);
    const body = new THREE.Mesh(bodyGeometry, robotMaterial);
    body.castShadow = true;
    robot.add(body);
    
    // Head
    const headGeometry = new THREE.SphereGeometry(1, 32, 32);
    const head = new THREE.Mesh(headGeometry, robotMaterial);
    head.position.y = 2.5;
    head.castShadow = true;
    robot.add(head);
    
    // Eyes
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const eyeGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.3, 0.2, 0.9);
    head.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.3, 0.2, 0.9);
    head.add(rightEye);
    
    // Arms
    const armGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2);
    
    const leftArm = new THREE.Mesh(armGeometry, robotMaterial);
    leftArm.position.set(-1.5, 1, 0);
    leftArm.rotation.z = Math.PI / 4;
    leftArm.castShadow = true;
    robot.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, robotMaterial);
    rightArm.position.set(1.5, 1, 0);
    rightArm.rotation.z = -Math.PI / 4;
    rightArm.castShadow = true;
    robot.add(rightArm);
    
    // Legs
    const legGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2);
    
    const leftLeg = new THREE.Mesh(legGeometry, robotMaterial);
    leftLeg.position.set(-0.6, -2.5, 0);
    leftLeg.castShadow = true;
    robot.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, robotMaterial);
    rightLeg.position.set(0.6, -2.5, 0);
    rightLeg.castShadow = true;
    robot.add(rightLeg);
    
    // Ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x1A1A2E,
        metalness: 0,
        roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -4;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Animation variables
    let autoRotate = true;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    
    // Mouse controls
    canvas.addEventListener('mousedown', () => {
        isDragging = true;
        canvas.style.cursor = 'grabbing';
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        canvas.style.cursor = 'grab';
    });
    
    canvas.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
        
        targetRotationY = mouseX * Math.PI;
        targetRotationX = mouseY * Math.PI;
    });
    
    canvas.addEventListener('mouseleave', () => {
        isDragging = false;
        canvas.style.cursor = 'grab';
    });
    
    // Touch controls for mobile
    canvas.addEventListener('touchstart', (event) => {
        event.preventDefault();
        isDragging = true;
    }, { passive: false });
    
    canvas.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    canvas.addEventListener('touchmove', (event) => {
        if (!isDragging) return;
        event.preventDefault();
        
        const touch = event.touches[0];
        mouseX = touch.clientX / window.innerWidth - 0.5;
        mouseY = touch.clientY / window.innerHeight - 0.5;
        
        targetRotationY = mouseX * Math.PI;
        targetRotationX = mouseY * Math.PI;
    }, { passive: false });
    
    // Control buttons functionality
    const danceBtn = document.getElementById('danceBtn');
    const waveBtn = document.getElementById('waveBtn');
    const jumpBtn = document.getElementById('jumpBtn');
    const colorBtn = document.getElementById('colorBtn');
    const autoRotateBtn = document.getElementById('autoRotateBtn');
    const lightsBtn = document.getElementById('lightsBtn');
    const colorPicker = document.getElementById('colorPicker');
    const colorOptions = document.querySelectorAll('.color-option');
    
    // Dance animation
    danceBtn.addEventListener('click', () => {
        gsap.to(robot.rotation, {
            y: robot.rotation.y + Math.PI * 2,
            duration: 2,
            ease: 'power2.inOut'
        });
        
        gsap.to(leftArm.rotation, {
            z: Math.PI / 2,
            duration: 0.5,
            yoyo: true,
            repeat: 3,
            ease: 'power2.inOut'
        });
        
        gsap.to(rightArm.rotation, {
            z: -Math.PI / 2,
            duration: 0.5,
            yoyo: true,
            repeat: 3,
            ease: 'power2.inOut'
        });
    });
    
    // Wave animation
    waveBtn.addEventListener('click', () => {
        gsap.to(rightArm.rotation, {
            z: -Math.PI / 2,
            duration: 0.5,
            yoyo: true,
            repeat: 2,
            ease: 'power2.inOut'
        });
    });
    
    // Jump animation
    jumpBtn.addEventListener('click', () => {
        gsap.to(robot.position, {
            y: robot.position.y + 2,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });
    });
    
    // Color picker
    colorBtn.addEventListener('click', () => {
        colorPicker.style.display = colorPicker.style.display === 'flex' ? 'none' : 'flex';
    });
    
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const color = option.getAttribute('data-color');
            robotMaterial.color.set(color);
            
            // Update point light color
            pointLight.color.set(color);
            
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to clicked option
            option.classList.add('active');
        });
    });
    
    // Auto rotate toggle
    autoRotateBtn.addEventListener('click', () => {
        autoRotate = !autoRotate;
        autoRotateBtn.classList.toggle('active');
        
        if (autoRotate) {
            autoRotateBtn.innerHTML = '<i class="fas fa-sync"></i> Auto Rotate';
        } else {
            autoRotateBtn.innerHTML = '<i class="fas fa-sync"></i> Manual';
        }
    });
    
    // Lights toggle
    let lightsOn = true;
    lightsBtn.addEventListener('click', () => {
        lightsOn = !lightsOn;
        lightsBtn.classList.toggle('active');
        
        if (lightsOn) {
            directionalLight.intensity = 1;
            pointLight.intensity = 2;
            ambientLight.intensity = 0.5;
            lightsBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Lights';
        } else {
            directionalLight.intensity = 0.2;
            pointLight.intensity = 0.5;
            ambientLight.intensity = 0.2;
            lightsBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Dark';
        }
    });
    
    // Window resize handler
    window.addEventListener('resize', () => {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Auto rotation
        if (autoRotate && !isDragging) {
            robot.rotation.y += 0.005;
        } else if (isDragging) {
            robot.rotation.y += (targetRotationY - robot.rotation.y) * 0.05;
            robot.rotation.x += (targetRotationX - robot.rotation.x) * 0.05;
        }
        
        // Eye pulse effect
        const time = Date.now() * 0.001;
        leftEye.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
        rightEye.scale.setScalar(1 + Math.cos(time * 3) * 0.1);
        
        renderer.render(scene, camera);
    }
    
    // Start animation
    animate();
    
    // Initial active color
    colorOptions[0].classList.add('active');
}