// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelector('i').classList.toggle('fa-bars');
    navToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.querySelector('i').classList.remove('fa-times');
        navToggle.querySelector('i').classList.add('fa-bars');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        
        // In a real application, you would send this data to a server
        // For this example, we'll just show an alert
        alert(`Thank you ${name}! Your message has been received. We'll contact you soon.`);
        
        // Reset form
        this.reset();
    });
}

// Newsletter Form Submission
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        if(emailInput.value) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        }
    });
});

// Add active class to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
    }
});

// Simple stats counter animation
const stats = document.querySelectorAll('.stat h4');
let animated = false;

function animateStats() {
    if(animated) return;
    
    const windowHeight = window.innerHeight;
    const statsSection = document.querySelector('.stats');
    const statsPosition = statsSection.getBoundingClientRect().top;
    
    if(statsPosition < windowHeight - 100) {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let count = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                count += increment;
                if(count >= target) {
                    count = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(count) + (stat.textContent.includes('MW') ? ' MW' : '+');
            }, 30);
        });
        animated = true;
    }
}

window.addEventListener('scroll', animateStats);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('EcoPower Solutions website loaded successfully');
    
    // Trigger stats animation if already in view on page load
    animateStats();
});