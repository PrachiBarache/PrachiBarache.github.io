// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#4a6fdc'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#4a6fdc',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
    
    // Counter animation for stats
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            let count = 0;
            const inc = target / speed;
            
            const updateCount = () => {
                if (count < target) {
                    count += inc;
                    counter.innerText = Math.floor(count);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
        });
    };
    
    // Start counters when about section comes into view
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target);
            }
        });
    });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
    
    // Projects filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.dataset.category.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Expandable content in experience section
    const readMoreBtns = document.querySelectorAll('.read-more');
    const readLessBtns = document.querySelectorAll('.read-less');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.closest('.expandable-content');
            parent.classList.add('expanded');
        });
    });
    
    readLessBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.closest('.expandable-content');
            parent.classList.remove('expanded');
        });
    });
    
    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Education tabs
    const tabHeaders = document.querySelectorAll('.tab-header');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tabContainer = this.closest('.tab-container');
            const tabId = this.dataset.tab;
            
            // Remove active class from all headers and panes in this container
            tabContainer.querySelectorAll('.tab-header').forEach(h => h.classList.remove('active'));
            tabContainer.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked header and corresponding pane
            this.classList.add('active');
            tabContainer.querySelector(`#${tabId}`).classList.add('active');
        });
    });
    
    // Back to top button
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
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // You would typically send the form data to a server here
            // For now, just show a success message
            this.innerHTML = '<div class="form-success"><i class="fas fa-check-circle"></i><h3>Thank you!</h3><p>Your message has been sent successfully. I\'ll get back to you soon.</p></div>';
        });
    }
    
    // Initialize skill bars animation
    const skillBars = document.querySelectorAll('.skill-level');
    
    const animateSkillBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.dataset.level;
                entry.target.style.width = level;
                skillObserver.unobserve(entry.target);
            }
        });
    };
    
    const skillObserver = new IntersectionObserver(animateSkillBars, { threshold: 0.1 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });

    // Typing effect animation for skills on hover
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const skillLevel = this.querySelector('.skill-level');
            skillLevel.style.width = '0';
            setTimeout(() => {
                skillLevel.style.width = skillLevel.dataset.level;
            }, 200);
        });
    });

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Project cards hover animation enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const links = this.querySelectorAll('.project-link');
            links.forEach((link, index) => {
                link.style.transitionDelay = `${index * 0.1}s`;
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const links = this.querySelectorAll('.project-link');
            links.forEach(link => {
                link.style.transitionDelay = '0s';
            });
        });
    });

    // Animated timeline scroll effect
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const animateTimeline = () => {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const itemBottom = item.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100 && itemBottom > 0) {
                item.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Run once on load

    // Dynamic year for copyright
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `&copy; ${currentYear} Prachi Barache. All rights reserved.`;
    }

    // Parallax effect for header
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (header) {
            header.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
});