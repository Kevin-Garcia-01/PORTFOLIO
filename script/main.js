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