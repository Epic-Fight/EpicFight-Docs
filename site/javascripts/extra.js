const hoverTexts = document.querySelectorAll('.hover-text');
const imageWrappers = document.querySelectorAll('.image-wrapper');
const glowBoxes = document.querySelectorAll('.glow-box3');
let lastHoveredImageId = null;  // Store the last hovered image ID

function showGlowBoxAndImage(event) {
    const target = event.currentTarget; // The hovered element
    const imageId = target.getAttribute('data-image-id');

    // Show the corresponding image with a smooth fade-in
    let imageShown = false; // Track if the image is found and shown
    imageWrappers.forEach(wrapper => {
        if (wrapper.getAttribute('data-image-id') === imageId) {
            wrapper.style.display = 'block';
            wrapper.style.opacity = '1';  // Fade in
            imageShown = true; // Mark image as shown
        } else {
            wrapper.style.opacity = '0';  // Fade out others
        }
    });

    if (!imageShown) {
        console.warn(`No matching image found for data-image-id="${imageId}"`);
    }

    // Find the corresponding glow box and update it
    const glowBox = target.closest('.content-container2')
        ? target.closest('.content-container2').querySelector('.glow-box3')
        : document.querySelector('.glow-box3'); // Fallback to the first glow box

    if (glowBox) {
        // Update the glow box properties
        glowBox.style.top = target.getAttribute('data-top');
        glowBox.style.left = target.getAttribute('data-left');
        glowBox.style.width = target.getAttribute('data-width');
        glowBox.style.height = target.getAttribute('data-height');
        glowBox.style.opacity = '1'; // Fade in the glow box
    }

    // Add hover-active class to container
    const container = target.closest('.content-container2');
    if (container) {
        container.classList.add('hover-active');
    }

    // Store the last hovered image ID
    lastHoveredImageId = imageId;
}

function hideGlowBoxAndImage(event) {
    // Hide all images except the last hovered one
    imageWrappers.forEach(wrapper => {
        if (wrapper.getAttribute('data-image-id') !== lastHoveredImageId) {
            wrapper.style.opacity = '0'; // Fade out
        }
    });

    // Fade out the glow boxes
    glowBoxes.forEach(glowBox => {
        glowBox.style.opacity = '0';
    });

    // Remove hover-active class from container
    const container = event.currentTarget.closest('.content-container2');
    if (container) {
        container.classList.remove('hover-active');
    }
}

// Attach event listeners to all hover-text elements
hoverTexts.forEach(item => {
    item.addEventListener('mouseenter', showGlowBoxAndImage); // Use mouseenter for precise hover
    item.addEventListener('mouseleave', hideGlowBoxAndImage); // Use mouseleave to avoid flicker
});