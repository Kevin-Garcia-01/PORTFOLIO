  document.addEventListener('DOMContentLoaded', () => {
    // Wait for everything to load completely
    setTimeout(() => {
        const footer = document.querySelector('footer');
        const contactBar = document.querySelector('.contact');
        
        // Only proceed if both elements exist
        if (footer && contactBar) {
            // Create intersection observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    // Toggle 'hidden' class based on intersection
                    contactBar.classList.toggle('hidden', entry.isIntersecting);
                });
            }, {
                root: null, // Observe relative to viewport
                rootMargin: '0px', // No margin adjustment
                threshold: 0.1 // Trigger when 10% of footer is visible
            });
            
            // Start observing the footer
            observer.observe(footer);
            
            // Debugging: Log when observer triggers
            observer.observe(footer);
            console.log('IntersectionObserver initialized');
        } else {
            console.error('Required elements not found:', { footer, contactBar });
        }
    }, 100); // Small delay to ensure DOM is fully ready
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('header');
    
    // close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // click hamburger
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // scroll close menu
    window.addEventListener('scroll', function() {
        const headerBottom = header.getBoundingClientRect().bottom;
        if (navMenu.classList.contains('active') && headerBottom < 0) {
            closeMenu();
        }
    });
    
    // close with click out of header
    document.addEventListener('click', function(event) {
        if (!header.contains(event.target) && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});

document.getElementById('download-cv').addEventListener('click', function() {
  // Pdf file path
  const pdfPath = '/assets/Kevin-Garcia-Frontend-CV.pdf';
  
  // Temporary link
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'Kevin-Garcia-Frontend-CV'; // File NAme when downloaded
  
  // click simulation
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});