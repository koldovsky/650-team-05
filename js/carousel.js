// // Natalia partner-blog
// (function() {
// const slides = [
//     '<img src="img/partner-blog/family_with_gifts.webp" alt="Family with gifts">',
//     '<img src="img/partner-blog/christmas_tree.webp" alt="christmas tree">',
//     '<img src="img/partner-blog/santa_claus.webp" alt="santa claus">'
// ]

// let currentSlideIdx = 0;

// function renderSlides() {
// const partnerBlogSlidesContainer = document.querySelector('.partners-blog-carousel .partners-blog-carousel-slides-container');
// partnerBlogSlidesContainer.innerHTML = slides[currentSlideIdx];
// if (window innerWidth > 767) {
//     const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
//     partnerBlogSlidesContainer.innerHTML += slides[slide2Idx];
// }
// }

// function nextSlide() {
// currentSlideIdx++;
// if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
// renderSlides();
// }

// function prevSlide() {
//     currentSlideIdx--;
//     if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
//     renderSlides();
//     }

//     document.querySelector('.partners-blog-carousel .partner-blog-prev').addEventListener('click', prevSlide);
//     document.querySelector('.partners-blog-carousel .partner-blog-center').addEventListener('click', centerSlide);
//     document.querySelector('.partners-blog-carousel .partner-blog-next').addEventListener('click', nextSlide);
// })();


