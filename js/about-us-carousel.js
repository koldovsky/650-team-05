(function () {

    const slides = [
        '<img src="../img/about-us/canadian-home.svg" alt="Canadian Home" />',
        '<img src="../img/about-us/hallmark.svg" alt="Hallmark" />',
        '<img src="../img/about-us/home-interiors.svg" alt="Home Interiors" />',
        '<img src="../img/about-us/home-shoping.svg" alt="Home Shoping" />',
        '<img src="../img/about-us/irwirs.svg" alt="Irwirs" />'
    ]

    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesContainer = document.querySelector('.about-us-slides-container');
        slidesContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 768) {
            const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slidesContainer.innerHTML += slides[slide2Idx];
            if (window.innerWidth > 999) {
                const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
                slidesContainer.innerHTML += slides[slide3Idx];
                if (window.innerWidth > 1000) {
                    const slide4Idx = slide3Idx + 1 >= slides.length ? 0 : slide3Idx + 1;
                    slidesContainer.innerHTML += slides[slide4Idx];

                }
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

    document.querySelector('.about-us-carousel .about-us-prev').addEventListener('click', prevSlide);
    document.querySelector('.about-us-carousel .about-us-next').addEventListener('click', nextSlide);
    setInterval(nextSlide, 3000);

    renderSlides();

    window.addEventListener('resize', renderSlides);
})();