// ==================== THEME MANAGEMENT ====================
const THEME_KEY = 'shyvansh-theme';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || DARK_MODE;
    setTheme(savedTheme);
}

// Set theme
function setTheme(theme) {
    if (theme === LIGHT_MODE) {
        document.documentElement.setAttribute('data-theme', LIGHT_MODE);
        localStorage.setItem(THEME_KEY, LIGHT_MODE);
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem(THEME_KEY, DARK_MODE);
    }
    updateThemeToggle();
}

// Toggle theme
function toggleTheme() {
    const currentTheme = localStorage.getItem(THEME_KEY) || DARK_MODE;
    const newTheme = currentTheme === DARK_MODE ? LIGHT_MODE : DARK_MODE;
    setTheme(newTheme);
}

// Update theme toggle button appearance
function updateThemeToggle() {
    const toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(toggle => {
        const svg = toggle.querySelector('svg');
        if (svg) {
            const currentTheme = localStorage.getItem(THEME_KEY) || DARK_MODE;
            if (currentTheme === LIGHT_MODE) {
                svg.style.transform = 'rotate(180deg)';
            } else {
                svg.style.transform = 'rotate(0deg)';
            }
        }
    });
}

// ==================== NAVIGATION ====================
function enterSite() {
    // Add animation to button
    const btn = event.target.closest('.enter-btn');
    if (btn) {
        btn.style.animation = 'pulse 0.5s ease-out';
        setTimeout(() => {
            navigateTo('home.html');
        }, 300);
    }
}

function navigateTo(page) {
    // Add fade out effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}

function goBack() {
    // Add fade out effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        window.history.back();
    }, 300);
}

// ==================== LINK HANDLING ====================
function openLink(url) {
    if (url.startsWith('mailto:')) {
        // For email, create mailto link
        const email = 'shyvanshworksgmail.com';
        window.location.href = `mailto:${email}`;
    } else {
        // Open in new tab
        window.open(url, '_blank');
    }
}

// ==================== PORTFOLIO IMAGE LOADING ====================
// Image list for portfolio
const portfolioImages = [
    'assets/images/Untitled156_20260609072400.png',
    'assets/images/Untitled157_20260609072544.png',
    'assets/images/Untitled158_20260609072831.png',
    'assets/images/Untitled158_20260609073126.png',
    'assets/images/Untitled159_20260609073317.png',
    'assets/images/Untitled160_20260609073519.png',
    'assets/images/Untitled161_20260609074039.png',
    'assets/images/Untitled162_20260609074220.png',
    'assets/images/Untitled163_20260610180749.jpg'
];

// Load portfolio images
function loadPortfolioImages() {
    const grid = document.getElementById('masonryGrid');
    if (!grid) return;

    portfolioImages.forEach((imagePath, index) => {
        const item = document.createElement('div');
        item.className = 'masonry-item';
        item.style.animationDelay = (index * 0.05) + 's';
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Portfolio item ${index + 1}`;
        img.loading = 'lazy';
        img.onerror = () => {
            console.warn(`Failed to load image: ${imagePath}`);
            item.style.display = 'none';
        };
        
        const overlay = document.createElement('div');
        overlay.className = 'masonry-item-overlay';
        overlay.innerHTML = `
            <div class="masonry-item-overlay-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 21H3V3h18M3 15l4-4 4 4 5-5 7 7M17 8h.01"/>
                </svg>
            </div>
        `;
        
        item.appendChild(img);
        item.appendChild(overlay);
        
        item.addEventListener('click', (e) => {
            openLightbox(imagePath);
        });
        
        grid.appendChild(item);
    });
}

// ==================== LIGHTBOX ====================
function openLightbox(imagePath) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = imagePath;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox(event) {
    // Close if clicking outside image or on close button
    if (event && event.target.id !== 'lightbox') {
        return;
    }
    
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ==================== PAGE FADE IN ANIMATION ====================
function pageLoadAnimation() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Trigger reflow
    void document.body.offsetWidth;
    
    document.body.style.opacity = '1';
}

// ==================== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ====================
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up-animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements that should animate on scroll
    document.querySelectorAll('.glass-card, .about-text, .about-social, .social-buttons').forEach(el => {
        if (!el.classList.contains('fade-up-animate')) {
            observer.observe(el);
        }
    });
}

// ==================== LAZY LOAD IMAGES ====================
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ==================== SMOOTH SCROLL ENHANCEMENT ====================
function enhanceSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== KEYBOARD NAVIGATION ====================
function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // Alt + T to toggle theme
        if ((e.altKey || e.metaKey) && e.key === 't') {
            e.preventDefault();
            toggleTheme();
        }
        
        // Escape to go back on inner pages
        if (e.key === 'Escape' && window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
            goBack();
        }
    });
}

// ==================== PERFORMANCE OPTIMIZATION ====================
function optimizePerformance() {
    // Preload images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src || img.dataset.src;
        document.head.appendChild(link);
    });

    // Defer non-critical resources
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            observeElements();
            initLazyLoading();
        });
    } else {
        setTimeout(() => {
            observeElements();
            initLazyLoading();
        }, 1000);
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Page load animation
    pageLoadAnimation();
    
    // Load portfolio images if on portfolio page
    if (document.getElementById('masonryGrid')) {
        loadPortfolioImages();
    }
    
    // Initialize observers and interactions
    observeElements();
    initLazyLoading();
    enhanceSmoothScroll();
    initKeyboardNav();
    optimizePerformance();
    
    // Update scroll position animation
    window.addEventListener('load', () => {
        // Retry loading images if first attempt failed
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.complete || img.naturalHeight === 0) {
                console.log('Retrying image load:', img.src);
            }
        });
    });
});

// ==================== ADDITIONAL UTILITIES ====================
// Detect if device supports hover
function supportsHover() {
    return window.matchMedia('(hover: hover)').matches;
}

// Detect if device is mobile
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Adaptive animations based on device capability
if (isMobile() && !supportsHover()) {
    // Reduce animations on touch devices without hover support
    document.documentElement.style.setProperty('--transition-duration', '0.2s');
}

// ==================== PAGE VISIBILITY HANDLING ====================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page is visible
        document.body.style.animationPlayState = 'running';
    }
});

// ==================== ERROR HANDLING ====================
window.addEventListener('error', (event) => {
    if (event.target.tagName === 'IMG') {
        console.warn(`Failed to load image: ${event.target.src}`);
        event.target.style.display = 'none';
    }
});

// ==================== CUSTOM LOGGING ====================
console.log('%cSHYVANSH Portfolio', 'font-size: 24px; font-weight: bold; color: #d4a574;');
console.log('%cPremium Glassmorphism Design', 'font-size: 14px; color: #d4a574;');
console.log('%cTip: Press Alt+T (or Cmd+T on Mac) to toggle theme', 'font-size: 12px; color: #b0b0b0;');
