// Function to update clock
function updateClock() {
    const now = new Date();
    const parisTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(now);
    document.getElementById('clock').textContent = parisTime;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Create and populate image gallery
const gallery = document.getElementById('imageGallery');
const imageCount = 28;

// Create double set of images for smooth infinite scroll
for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= imageCount; j++) {
        const img = document.createElement('img');
        img.src = `TRAE PICTURES/image ${j}.png`;
        img.alt = `Challenge ${j}`;
        img.dataset.index = j;
        gallery.appendChild(img);
    }
}

// Modal functionality
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const infoModal = document.getElementById('infoModal');
const closeButtons = document.getElementsByClassName('close-modal');

// Handle image clicks
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modalImage.src = e.target.src;
        imageModal.style.display = 'block';
    }
});

// Handle info button clicks
document.querySelector('.info-btn').addEventListener('click', () => {
    infoModal.style.display = 'block';
});

// Close modals
Array.from(closeButtons).forEach(button => {
    button.addEventListener('click', () => {
        imageModal.style.display = 'none';
        infoModal.style.display = 'none';
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === imageModal) imageModal.style.display = 'none';
    if (e.target === infoModal) infoModal.style.display = 'none';
});