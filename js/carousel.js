// Natalia partner-blog
(function() {
const slides = [
    '<img src="img/partner-blog/family_with_gifts.webp" alt="Family with gifts">',
    '<img src="img/partner-blog/christmas_tree.webp" alt="christmas tree">',
    '<img src="img/partner-blog/santa_claus.webp" alt="santa claus">'
]

let currentSlideIdx = 0;

function renderSlides() {
const partnerBlogSlidesContainer = document.querySelector('.partners-blog-carousel .partners-blog-carousel-slides-container');
partnerBlogSlidesContainer.innerHTML = slides[currentSlideIdx];
}

function nextSlide() {
currentSlideIdx++;
if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
renderSlides();
}


})();


