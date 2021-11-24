(function() {
    const slides = [
        '<div><img src="img/instagram/footer-carousel-tree-first.png" alt="Instagram NY tree slide first"></div>',
        '<div><img src="img/instagram/footer-carousel-family-first.png" alt="Instagram NY family slide second"></div>',
        '<div><img src="img/instagram/footer-carousel-tree-second.png" alt="Instagram NY tree slide third"></div>',
        '<div><img src="img/instagram/footer-carousel-family-second.png" alt="Instagram NY family slide fourth"></div>',
        '<div><img src="img/instagram/footer-carousel-tree-third.png" alt="Instagram NY tree slide fifth"></div>',
        '<div><img src="img/instagram/footer-carousel-family-third.png" alt="Instagram NY family slide sixth"></div>',
        '<div><img src="img/instagram/footer-carousel-tree-fourth.png" alt="Instagram NY tree slide seventh"></div>',
    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesContainer = document.querySelector('.carousel-instagram .slides-container');
        slidesContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 462) {
            const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slidesContainer.innerHTML += slides[slide2Idx];
            if (window.innerWidth > 750) {
                const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
                slidesContainer.innerHTML += slides[slide3Idx];    
                if (window.innerWidth > 975) {
                    const slide4Idx = slide3Idx + 3 >= slides.length ? 0 : slide3Idx + 3;
                    slidesContainer.innerHTML += slides[slide4Idx]; }
            }
        }
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        renderSlides();
    }

    function prevSlide() {
        currentSlideIdx--;
        if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
        renderSlides();
    }

    setInterval(nextSlide, 3000);
    document.querySelector('.carousel-instagram .prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-instagram .next').addEventListener('click', nextSlide);

    renderSlides();

    window.addEventListener('resize', renderSlides);
})();