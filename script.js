  document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav');

            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = nav.contains(event.target);
                const isClickInsideToggle = menuToggle.contains(event.target);

                if (!isClickInsideNav && !isClickInsideToggle && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Update address link
            const addressLink = document.getElementById('address-link');
            const address = "CE/141 ANSHAL HOUSING, Ansal Golf Links 1, Greater Noida, Uttar Pradesh 201310";
            addressLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

            // Gallery functionality
            const galleryTrack = document.querySelector('.gallery-track');
            const galleryItems = document.querySelectorAll('.gallery-item');
            const leftArrow = document.querySelector('.gallery-arrow.left');
            const rightArrow = document.querySelector('.gallery-arrow.right');
            let currentIndex = 0;

            function updateGallery() {
                galleryTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            leftArrow.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateGallery();
                }
            });

            rightArrow.addEventListener('click', () => {
                if (currentIndex < galleryItems.length - 1) {
                    currentIndex++;
                    updateGallery();
                }
            });

            // Optional: Add keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    leftArrow.click();
                } else if (e.key === 'ArrowRight') {
                    rightArrow.click();
                }
            });
        });
