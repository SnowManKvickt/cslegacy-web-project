// CS:Legacy Website - Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Navbar active state
    setActiveNavItem();

    // Initialize countdown timer
    initCountdown();

    // Smooth scrolling for anchor links
    enableSmoothScroll();
});

// Set active state for navbar items based on scroll position
function setActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            } else if (current === '' && item.getAttribute('href') === '#') {
                item.classList.add('active');
            }
        });
    });
}

// Initialize countdown timer to the release date
function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    if (!countdownElement) return;
    
    // Set the release date (2025-01-01 for example)
    const releaseDate = new Date('August 1, 2025 00:00:00').getTime();
    
    // Update the countdown every second
    const countdownTimer = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Calculate the time remaining
        const distance = releaseDate - now;
        
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById('days').innerHTML = formatTime(days);
        document.getElementById('hours').innerHTML = formatTime(hours);
        document.getElementById('minutes').innerHTML = formatTime(minutes);
        document.getElementById('seconds').innerHTML = formatTime(seconds);
        
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownTimer);
            countdownElement.innerHTML = '<h3 class="text-success">CS:Legacy is now available!</h3>';
        }
    }, 1000);
}

// Format time units to always display two digits
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Enable smooth scrolling for anchor links
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effect for sections
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    
    // Apply parallax effect to sections with class 'parallax'
    document.querySelectorAll('.parallax').forEach(function(element) {
        const speed = element.getAttribute('data-speed') || 0.5;
        element.style.transform = 'translateY(' + scrollPosition * speed + 'px)';
    });
});

// Add video background dynamically if missing
window.addEventListener('load', function() {
    const videoElement = document.getElementById('hero-video');
    
    if (videoElement && !videoElement.getAttribute('src')) {
        const placeholderVideo = document.createElement('source');
        placeholderVideo.setAttribute('src', 'assets/videos/hero-background.mp4');
        placeholderVideo.setAttribute('type', 'video/mp4');
        videoElement.appendChild(placeholderVideo);
        videoElement.load();
        videoElement.play();
    }
});

// Form submission handling
const newsletterForm = document.querySelector('#newsletter form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email === '') {
            showFormMessage('Please enter your email address', 'danger');
            return;
        }
        
        // Simulate form submission (replace with actual API call)
        showFormMessage('Thank you for subscribing!', 'success');
        emailInput.value = '';
    });
}

// Show form submission messages
function showFormMessage(message, type) {
    const formSection = document.querySelector('#newsletter');
    
    if (!formSection) return;
    
    const existingAlert = formSection.querySelector('.alert');
    
    if (existingAlert) {
        existingAlert.remove();
    }
    
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type} mt-3`;
    alertElement.textContent = message;
    
    const formContainer = formSection.querySelector('.col-lg-8');
    formContainer.appendChild(alertElement);
    
    // Auto dismiss after 3 seconds
    setTimeout(function() {
        alertElement.remove();
    }, 3000);
} 