const slides = document.querySelectorAll('.slideshow');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

let slideshowInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds


const colorOptions = document.querySelectorAll('.color-option');
const colorImage = document.getElementById('color-image');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const color = option.getAttribute('data-color');
        displayColorImage(color);
    });
});

function displayColorImage(color) {
    const images = {
        'Awesome Gray': 'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a73/buy/A73_Black.png?imwidth=720',
        'Awesome Mint': 'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a73/buy/A73_Mint.png?imwidth=720',
        'Awesome White': 'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a73/buy/A73_White.png?imwidth=720'
    };

    if (images[ color ]) {
        colorImage.src = images[ color ];
    }
}