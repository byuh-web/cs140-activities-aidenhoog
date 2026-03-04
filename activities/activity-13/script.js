// --- 1. Hero Slider Logic ---
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Auto-slide every 6 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 6000);


// --- 2. Cart Notification Logic ---
let cartCount = 0;
const bagDisplay = document.getElementById('bag-count');
const notification = document.getElementById('cart-notification');
const buyBtns = document.querySelectorAll('.add-to-bag');

buyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        cartCount++;
        bagDisplay.innerText = `Bag (${cartCount})`;
        
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 3000);
    });
});


// --- 3. Dark Mode Toggle Logic ---
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        themeToggle.innerText = 'Light Mode';
    } else {
        themeToggle.innerText = 'Dark Mode';
    }
});


// --- 4. Size Guide Modal Logic ---
const modal = document.getElementById('size-modal');
const sizeBtns = document.querySelectorAll('.size-guide-btn');
const closeBtn = document.querySelector('.close-btn');

sizeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});