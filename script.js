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
const imageCount = 14;

// Create top row (images 1-7) scrolling left
const topRow = document.createElement('div');
topRow.className = 'gallery-row scroll-left';
for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 7; j++) {
        const img = document.createElement('img');
        img.src = `TRAE PICTURES/image ${j}.png`;
        img.alt = `Challenge ${j}`;
        img.dataset.index = j;
        topRow.appendChild(img);
    }
}

// Create bottom row (images 8-14) scrolling right
const bottomRow = document.createElement('div');
bottomRow.className = 'gallery-row scroll-right';
for (let i = 0; i < 4; i++) {
    for (let j = 8; j <= 14; j++) {
        const img = document.createElement('img');
        img.src = `TRAE PICTURES/image ${j}.png`;
        img.alt = `Challenge ${j}`;
        img.dataset.index = j;
        bottomRow.appendChild(img);
    }
}

// Add rows to gallery
gallery.appendChild(topRow);
gallery.appendChild(bottomRow);


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