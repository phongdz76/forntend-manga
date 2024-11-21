const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = Array.from(document.querySelectorAll('.slide'));
let slideIndex = 0;
const maxSlides = 10; // Giới hạn số lượng slide tối đa là 10
const slideWidth = 30; // 20px width + 10px margin
let isSliding = false; // Để ngăn chặn việc nhấn nút khi đang chuyển slide

// Giới hạn số lượng slide thực tế
if (slides.length > maxSlides) {
    slides.splice(maxSlides);
    slider.innerHTML = '';
    slides.forEach(slide => slider.appendChild(slide));
}

function showSlide(index) {
    if (isSliding) return; // Ngăn chặn khi đang thực hiện chuyển động
    isSliding = true; // Đánh dấu bắt đầu chuyển động

    if (index >= slides.length) {
        slideIndex = 0; // Reset về đầu
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Reset về cuối
    } else {
        slideIndex = index;
    }

    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

    slider.addEventListener('transitionend', () => {
        isSliding = false; // Đánh dấu kết thúc chuyển động
    }, { once: true });
}

function nextSlide() {
    if (!isSliding) showSlide(slideIndex + 1);
}

function prevSlide() {
    if (!isSliding) showSlide(slideIndex - 1);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Auto-sliding with control over start and stop
let autoSlide = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Pause auto-sliding on hover and resume when mouse leaves
slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 3000);
});


// Đợi cho trang web load xong
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử cần thiết
    const menuToggle = document.querySelector('.menu-toggle');
    const searchToggle = document.querySelector('.search-toggle');
    const navDropdown = document.querySelector('.nav-home1');
    const searchBar = document.querySelector('.top_search');
    const dropdownItems = document.querySelectorAll('.navigation-dropdown li');

    // Xử lý sự kiện click vào nút menu
    menuToggle.addEventListener('click', function() {
        navDropdown.classList.toggle('active');
    });

    // Xử lý sự kiện click vào nút search
    searchToggle.addEventListener('click', function() {
        searchBar.classList.toggle('active');
    });

    // Xử lý sự kiện click vào các mục menu
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});






