/* ── GALLERY PAGINATION ── */
const galleryGrid = document.getElementById('galleryGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const paginationDots = document.getElementById('paginationDots');
const pageInfo = document.getElementById('pageInfo');

// Array van alle beschikbare afbeeldingen uit assets/images/
const allImages = [
    '../assets/images/portrait-1.jpg',
    '../assets/images/portrait-2.jpg',
    '../assets/images/portrait-3.jpg',
    '../assets/images/portrait-4.jpg',
    '../assets/images/portrait-5.jpg',
    '../assets/images/portrait-6.jpg',
    '../assets/images/portrait-7.jpg',
    '../assets/images/boaz-portrait.jpg',
    '../assets/images/travel-1.jpg',
    '../assets/images/travel-2.jpg',
    '../assets/images/travel-3.jpg',
    '../assets/images/travel-4.jpg',
    '../assets/images/travel-5.jpg',
    '../assets/images/travel-6.jpg',
    '../assets/images/travel-7.jpg',
    '../assets/images/travel-new-1.jpg',
    '../assets/images/travel-new-2.jpg',
    '../assets/images/travel-new-3.jpg',
    '../assets/images/travel-new-4.jpg',
    '../assets/images/sport-1.jpg',
    '../assets/images/sport-2.jpg',
    '../assets/images/sport-3.jpg',
    '../assets/images/sport-4.jpg',
    '../assets/images/sport-5.jpg',
    '../assets/images/sport-6.jpg',
    '../assets/images/sport-7.jpg',
    '../assets/images/event-1.jpg',
    '../assets/images/event-2.jpg',
    '../assets/images/event-3.jpg',
    '../assets/images/event-4.jpg',
    '../assets/images/event-5.jpg',
    '../assets/images/event-6.jpg',
    '../assets/images/event-7.jpg',
    '../assets/images/event-8.jpg',
    '../assets/images/branding-1.jpg',
    '../assets/images/branding-2.jpg',
    '../assets/images/branding-3.jpg',
    '../assets/images/branding-4.jpg'
];

const itemsPerPage = 9;
let currentPage = 0;

function renderGallery() {
    const startIdx = currentPage * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentImages = allImages.slice(startIdx, endIdx);

    galleryGrid.innerHTML = '';
    currentImages.forEach(imagePath => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${imagePath}" alt="Portfolio afbeelding" loading="lazy">`;
        galleryGrid.appendChild(item);
    });

    // Update buttons
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = endIdx >= allImages.length;

    // Update page info
    const totalPages = Math.ceil(allImages.length / itemsPerPage);
    pageInfo.textContent = `Pagina ${currentPage + 1} van ${totalPages} (${allImages.length} afbeeldingen)`;

    // Update dots
    updatePaginationDots();
}

function updatePaginationDots() {
    const totalPages = Math.ceil(allImages.length / itemsPerPage);
    paginationDots.innerHTML = '';

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === currentPage ? ' active' : '');
        dot.addEventListener('click', () => {
            currentPage = i;
            renderGallery();
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        paginationDots.appendChild(dot);
    }
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderGallery();
    }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(allImages.length / itemsPerPage);
    if (currentPage < totalPages - 1) {
        currentPage++;
        renderGallery();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
});

// Render initial gallery
renderGallery();