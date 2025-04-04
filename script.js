// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the link is internal (starts with #)
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault(); // Prevent default jump

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate scroll position, accounting for fixed header height
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 10; // Adjust -10 for a little padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Smooth scroll animation
                });
            }
        }
        // Allow normal behavior for external links (like Download Resume)
    });
});

// Dynamic Year for Footer
document.getElementById('year').textContent = new Date().getFullYear();