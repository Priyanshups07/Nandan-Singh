/**
 * STITCH VANGUARD - Main Interactive Engine
 * Handling premium animations, navigation, and interactions.
 */

/**
 * Calendar & Time Slot Interactivity
 */
function initCalendar() {
    const days = document.querySelectorAll('.calendar-day:not(.empty)');
    const slots = document.querySelectorAll('.time-slot');

    days.forEach(day => {
        day.addEventListener('click', () => {
            days.forEach(d => d.classList.remove('active'));
            day.classList.add('active');
            
            const calendarCard = document.querySelector('.calendar-mock');
            if (calendarCard) {
                calendarCard.style.opacity = '0.5';
                setTimeout(() => {
                    calendarCard.style.opacity = '1';
                }, 200);
            }
        });
    });

    slots.forEach(slot => {
        slot.addEventListener('click', () => {
            slots.forEach(s => {
                s.style.background = 'transparent';
                s.style.color = 'var(--primary)';
            });
            slot.style.background = 'var(--primary)';
            slot.style.color = 'white';
        });
    });
}

/**
 * Testimonial Filtering
 */
function initTestimonialFilters() {
    const filters = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.case-study');

    if (filters.length === 0) return;

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.textContent.trim();
            filters.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');

            // Auto-scroll to results
            const target = document.getElementById('results-section');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            items.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'ALL RESULTS' || itemCategory === category) {
                    item.style.display = 'grid';
                    setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'translateY(0)'; }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => { item.style.display = 'none'; }, 300);
                }
            });
        });
    });
}

/**
 * 3D Scrolling Effect
 */
function init3DScrolling() {
    const reveals = document.querySelectorAll('.reveal');
    window.addEventListener('scroll', () => {
        reveals.forEach(el => {
            if (el.classList.contains('active')) {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const centerOffset = (window.innerHeight / 2) - (rect.top + rect.height / 2);
                    const rotation = centerOffset * 0.01;
                    el.style.transform = `translateY(${centerOffset * 0.05}px) rotateX(${rotation}deg)`;
                }
            }
        });
    });
}

/**
 * Scroll Reveal Animations
 */
function initRevealAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/**
 * Navbar Effects
 */
function initNavbarEffect() {
    const nav = document.getElementById('main-nav');
    const navContainer = document.querySelector('.nav-container');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0';
            navContainer.style.background = 'rgba(255, 255, 255, 0.9)';
            navContainer.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.padding = '10px 0';
            navContainer.style.background = 'rgba(255, 255, 255, 0.7)';
            navContainer.style.backdropFilter = 'blur(10px)';
        }
    });
}

/**
 * Magnetic Button Effect
 */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.nav-links .btn, .hero .btn, .cta .btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}

/**
 * Smooth Anchor Scrolling
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                document.body.style.transform = 'scale(0.99)';
                document.body.style.transition = 'transform 0.2s cubic-bezier(0.19, 1, 0.22, 1)';
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => { document.body.style.transform = 'scale(1)'; }, 200);
            }
        });
    });
}

/**
 * Form Handling
 */
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            if (!submitBtn) return;
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="material-symbols-outlined rotating" style="font-size: 16px;">sync</span> PROCESSING...';
            submitBtn.disabled = true;
            await new Promise(r => setTimeout(r, 2000));
            submitBtn.innerHTML = 'INQUIRY SENT';
            submitBtn.style.background = '#004225';
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                form.reset();
            }, 3000);
        });
    });
}

/**
 * Page Exit Transitions
 */
function initPageExitTransitions() {
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname && !link.hash) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.href;
                document.body.classList.remove('loaded');
                setTimeout(() => { window.location.href = href; }, 300);
            });
        }
    });
}

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { document.body.classList.add('loaded'); }, 50);
    initRevealAnimations();
    initNavbarEffect();
    initMagneticButtons();
    initSmoothScroll();
    initFormHandling();
    initPageExitTransitions();
    init3DScrolling();
    initCalendar();
    initTestimonialFilters();
});
