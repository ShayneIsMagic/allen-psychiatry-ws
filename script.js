// Mobile menu toggle
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.main-nav');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Sticky header
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        let isValid = true;
        form.querySelectorAll('input[required], textarea[required]').forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Here you would typically send the data to your server
            console.log('Form data:', data);
            form.reset();
            alert('Thank you for your message. We will get back to you soon!');
        }
    });
});

// Add error class styling
const errorStyle = document.createElement('style');
errorStyle.textContent = `
    .error {
        border-color: #ff4444 !important;
    }
    .error:focus {
        box-shadow: 0 0 0 2px rgba(255, 68, 68, 0.2) !important;
    }
`;
document.head.appendChild(errorStyle);

// Enhanced JavaScript for Allen Psychiatry Website

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - checking elements...');
    
    // Debug: Check if elements exist
    const mainNav = document.querySelector('.main-nav');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const aboutContent = document.querySelector('.about-content');
    const aboutInfo = document.querySelectorAll('.about-info');
    
    console.log('Main nav found:', !!mainNav);
    console.log('Hamburger menu found:', !!hamburgerMenu);
    console.log('About content found:', !!aboutContent);
    console.log('About info elements found:', aboutInfo.length);
    
    // Force display of navigation
    if (mainNav) {
        mainNav.style.display = 'block';
        mainNav.style.visibility = 'visible';
        mainNav.style.opacity = '1';
        console.log('Forced main nav to display');
    }
    
    // Force display of content
    if (aboutContent) {
        aboutContent.style.display = 'grid';
        aboutContent.style.visibility = 'visible';
        aboutContent.style.opacity = '1';
        console.log('Forced about content to display');
    }
    
    aboutInfo.forEach((info, index) => {
        info.style.display = 'block';
        info.style.visibility = 'visible';
        info.style.opacity = '1';
        console.log(`Forced about-info ${index} to display`);
    });
    
    // Smooth scrolling for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                console.log('Element animated in:', entry.target.className);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-info, .service-card, .feature, .cta-content, .cta-section');
    animateElements.forEach(el => {
        observer.observe(el);
        console.log('Observing element for animation:', el.className);
    });

    // Special CTA animation observer
    const ctaObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ctaSection = entry.target;
                const ctaContent = ctaSection.querySelector('.cta-content');
                
                // Add animation classes
                ctaSection.classList.add('animate-in');
                if (ctaContent) {
                    ctaContent.classList.add('animate-in');
                }
                
                // Force visibility
                ctaSection.style.opacity = '1';
                ctaSection.style.visibility = 'visible';
                if (ctaContent) {
                    ctaContent.style.opacity = '1';
                    ctaContent.style.visibility = 'visible';
                }
                
                console.log('CTA section animated in');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe CTA sections specifically
    const ctaSections = document.querySelectorAll('.cta-section');
    ctaSections.forEach(section => {
        ctaObserver.observe(section);
        console.log('Observing CTA section for animation');
    });

    // Enhanced mobile navigation
    const navItems = document.querySelectorAll('.nav-items li');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate menu items
            navItems.forEach((item, index) => {
                if (mainNav.classList.contains('active')) {
                    item.style.animationDelay = `${index * 0.1}s`;
                    item.classList.add('slide-in');
                } else {
                    item.classList.remove('slide-in');
                }
            });
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburgerMenu.contains(e.target) && !mainNav.contains(e.target)) {
            mainNav.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            navItems.forEach(item => item.classList.remove('slide-in'));
        }
    });

    // Enhanced dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        dropdown.addEventListener('mouseenter', function() {
            this.classList.add('open');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'block';
                setTimeout(() => {
                    dropdownMenu.style.opacity = '1';
                    dropdownMenu.style.transform = 'translateY(0)';
                }, 10);
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            this.classList.remove('open');
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    dropdownMenu.style.display = 'none';
                }, 300);
            }
        });
    });

    // Parallax effect for service hero sections
    const serviceHero = document.querySelector('.service-hero');
    if (serviceHero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            serviceHero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Enhanced CTA button interactions
    const ctaButtons = document.querySelectorAll('.cta-section .btn');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(51, 150, 188, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 4px 10px rgba(51, 150, 188, 0.2)';
        });
    });

    // Smooth reveal animations for content sections
    const revealElements = document.querySelectorAll('.about-info, .feature');
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // Enhanced breadcrumb interactions
    const breadcrumbLinks = document.querySelectorAll('.breadcrumbs a');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service page specific enhancements
    if (document.querySelector('.service-hero')) {
        // Add floating animation to service hero content
        const heroContent = document.querySelector('.service-hero .container');
        if (heroContent) {
            setInterval(() => {
                heroContent.style.transform = 'translateY(-5px)';
                setTimeout(() => {
                    heroContent.style.transform = 'translateY(0)';
                }, 1000);
            }, 3000);
        }

        // Enhanced list item animations
        const listItems = document.querySelectorAll('.about-info ul li');
        listItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            
            const itemObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }
                });
            }, { threshold: 0.5 });
            
            itemObserver.observe(item);
        });
    }

    // Back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
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

    // Enhanced form interactions (if any forms exist)
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Handle scroll-based animations here
        }, 10);
    });

    // Add loading animation for page transitions
    window.addEventListener('beforeunload', function() {
        document.body.classList.add('page-transitioning');
    });

    // Enhanced accessibility
    document.addEventListener('keydown', function(e) {
        // ESC key to close mobile menu
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });

    // Focus management for mobile menu
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    console.log('Allen Psychiatry enhanced JavaScript loaded successfully');
});

// Additional CSS animations for enhanced interactions
const style = document.createElement('style');
style.textContent = `
    @keyframes slide-in {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .slide-in {
        animation: slide-in 0.3s ease forwards;
    }

    .animate-in {
        animation: fade-in-up 0.6s ease forwards;
    }

    .page-transitioning {
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }

    .focused {
        transform: scale(1.02);
        transition: transform 0.2s ease;
    }
`;
document.head.appendChild(style); 