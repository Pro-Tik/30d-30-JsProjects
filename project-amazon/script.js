const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

// changeSlide();

// prev_btn.addEventListener('click', (e) => {
//     if (n > 0) {
//         n--;
//     } else {
//         n = imgs.length - 1;
//     }
//     changeSlide();
// })

// next_btn.addEventListener('click', (e) => {
//     if (n < imgs.length - 1) {
//         n++;
//     } else {
//         n = 0;
//     }
//     changeSlide();
// })

// const scrollContainer = document.querySelectorAll('.products');
// for (const item of scrollContainer) {
//     item.addEventListener('wheel', (evt) => {
//         evt.preventDefault();
//         item.scrollLeft += evt.deltaY;
//     });
// }

/** Sidebar Functionality **/
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarOpenBtn = document.getElementById('panel-all');
const sidebarCloseBtn = document.getElementById('sidebar-close');

function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

sidebarOpenBtn.addEventListener('click', openSidebar);
sidebarCloseBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

/** Hero Carousel Functionality **/
const heroSection = document.getElementById('hero-section');
const heroPrevBtn = document.getElementById('hero-prev');
const heroNextBtn = document.getElementById('hero-next');

// Using the same image for demonstration, but in a real app these would be different
const heroImages = [
    'assets/hero_image.jpg',
    'assets/box1_image.jpg', // Using box images as placeholders for other slides
    'assets/box2_image.jpg'
];

let currentSlide = 0;

function updateHeroSlide() {
    heroSection.style.backgroundImage = `url('${heroImages[currentSlide]}')`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroImages.length;
    updateHeroSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
    updateHeroSlide();
}

heroNextBtn.addEventListener('click', nextSlide);
heroPrevBtn.addEventListener('click', prevSlide);

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

/** Back to Top Button **/
const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
