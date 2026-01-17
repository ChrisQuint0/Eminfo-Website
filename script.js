document.addEventListener('DOMContentLoaded', () => {

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const screenshots = document.querySelectorAll('.screenshot');
    const closeBtn = document.querySelector('.lightbox-close');

    // Open Lightbox
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', (e) => {
            lightbox.style.display = 'flex';
            lightboxImg.src = e.target.src;
            // Prevent scrolling on body when lightbox is open
            document.body.style.overflow = 'hidden';
        });
    });

    // Close Lightbox function
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
    };

    // Close on X click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });

});
