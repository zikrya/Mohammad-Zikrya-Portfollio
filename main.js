document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scroll-container');
    const sections = document.querySelectorAll("#scroll-container > section, #scroll-container > div[id]");
    const dots = document.querySelectorAll(".scroll-indicator a");

    function updateActiveLink() {
        let activeSectionId = sections[0].id; // Default to the first section
        const scrollPosition = scrollContainer.scrollTop + scrollContainer.offsetTop;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - scrollContainer.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSectionId = section.id;
            } else if (index === 0 && scrollPosition < sectionTop) {
                activeSectionId = section.id;
            }
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href') === `#${activeSectionId}`) {
                dot.classList.add('active');
            }
        });
    }

    // Initialize and update active link on scroll and resize
    updateActiveLink();
    scrollContainer.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', updateActiveLink);
});
