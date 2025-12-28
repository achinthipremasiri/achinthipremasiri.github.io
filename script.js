// ========================================
// Magic Cursor (Desktop Only)
// ========================================

const blooms = ['🌸', '🌿', '🌱', '✨', '🍀', '🍄', '🌻', '🌺', '🌷'];

// Only initialize cursor on non-touch devices
const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
};

if (!isTouchDevice()) {
    const cursor = document.getElementById('magic-cursor');
    
    if (cursor) {
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Update cursor position
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
            
            // Create blooming trail (density control)
            if (Math.random() > 0.8) {
                const trail = document.createElement('div');
                trail.className = 'bloom-trail';
                
                const bloomEmoji = blooms[Math.floor(Math.random() * blooms.length)];
                trail.textContent = bloomEmoji;
                
                const offsetX = (Math.random() - 0.5) * 15;
                const offsetY = (Math.random() - 0.5) * 15;
                
                trail.style.left = `${x + offsetX}px`;
                trail.style.top = `${y + offsetY}px`;
                
                document.body.appendChild(trail);
                
                // Remove trail after animation
                setTimeout(() => {
                    trail.remove();
                }, 800);
            }
        });
        
        // Scale cursor on hover over interactive elements
        const handleMouseEnter = () => {
            cursor.style.transform = 'translate(-50%, -50%) rotate(-20deg) scale(1.5)';
        };
        
        const handleMouseLeave = () => {
            cursor.style.transform = 'translate(-50%, -50%) rotate(-20deg) scale(1)';
        };
        
        // Attach hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, .conference-card, .research-card, .pub-item, .cert-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });
    }
}

// ========================================
// Mobile Navigation Toggle
// ========================================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========================================
// Active Navigation Link on Scroll
// ========================================

const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-link');

const makeActive = (link) => {
    navItems.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
};

const options = {
    threshold: 0.3,
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const activeLink = document.querySelector(`[href="#${entry.target.id}"]`);
            if (activeLink) {
                makeActive(activeLink);
            }
        }
    });
}, options);

sections.forEach((section) => {
    sectionObserver.observe(section);
});

// ========================================
// Smooth Scroll for Navigation Links
// ========================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Download CV Function
// ========================================

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'Achinthi_Premasiri_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ========================================
// Fade-in Animation on Scroll
// ========================================

const fadeElements = document.querySelectorAll('.conference-card, .timeline-item, .research-card, .pub-item, .cert-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach((el) => {
    fadeObserver.observe(el);
});

// ========================================
// Email Click to Copy (Optional Enhancement)
// ========================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const email = link.href.replace('mailto:', '');
        
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Show temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Email copied!';
            tooltip.style.cssText = `
                position: fixed;
                background: var(--primary);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                font-weight: 600;
                z-index: 10001;
                pointer-events: none;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            `;
            
            const rect = link.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.top - 40}px`;
            
            document.body.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    });
});

// ========================================
// Navbar Background on Scroll
// ========================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// ========================================
// Image Placeholder Click Handler
// ========================================

const imagePlaceholders = document.querySelectorAll('.image-placeholder');

imagePlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        // Future: Could open a lightbox or file upload dialog
        console.log('Image placeholder clicked - ready for actual image');
    });
});

// ========================================
// Performance: Reduce Motion for Accessibility
// ========================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable cursor trail
    document.addEventListener('mousemove', (e) => {
        e.stopPropagation();
    }, true);
}

// ========================================
// Log Console Message
// ========================================

console.log('%c🌱 Achinthi Premasiri Portfolio', 'color: #059669; font-size: 20px; font-weight: bold;');
console.log('%cWebsite built with surgical precision 🎯', 'color: #10B981; font-size: 14px;');
console.log('%cInterested in collaboration? Contact: achinthipremasiri@gmail.com', 'color: #6B7280; font-size: 12px;');
