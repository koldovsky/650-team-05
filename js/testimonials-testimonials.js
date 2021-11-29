(function() {
    const slides = [

        `<div class = "testimonials-first-image"> <div> <img src = "img/testimonials-testimonials/family.webp" alt = "# "/> </div> <div> <h5> Dean and Alice Peterson </h5> </div> <div> <p>"Christmas is a spacial time! We always buy Christmas Decorations in advance. For the third year now? we have been making orders in this store and are completely satisfied with the quality of each bauble purchased " </p> </div> <div class = "testimonials-text-curved "> <i> December 15, 2019 </i> </div> </div>`,
        `<div class="testimonials-second-image-right"> <div> <img src="img/testimonials-testimonials/happy-family.jpeg" alt="# "/> </div> <div> <h5> Susan Owler </h5> </div> <div> <p> "My daughter is four years old and she has been waiting for Christmas preparation since October! We start decorating the Christmas tree in early December, and I always buy something new at Christmas Decorations shop." </p> </div> <div class="testimonials-text-curved"> <i> December 08, 2018 </i> </div> </div>`,
        `<div class="testimonials-right-two"> <div> <img src="img/testimonials-testimonials/happy-family-with-tree.jpg" alt="# "/> </div> <div> <h5> Daniella Lencingtone </h5> </div> <div> <p> "The anticipation of Christmas is the best thing in December. I like the feeling that magic is coming and try to start Christmas decorations in early December. This year, I have bought a new X-mas tree and lots of baubles." </p> </div> <div class="testimonials-text-curved "> <i> December 02, 2020 </i> </div> </div>`
    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesContainer = document.querySelector(`.carousel .slides-container`);
        slidesContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 600) {
            const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slidesContainer.innerHTML += slides[slide2Idx];
            if (window.innerWidth > 800) {
                const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
                slidesContainer.innerHTML += slides[slide3Idx];
                if (window.innerWidth > 767) {
                    const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
                    slidesContainer.innerHTML += slides[slide2Idx];
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
    setInterval(nextSlide, 3000);
    document.querySelector(`.carousel .prev `).addEventListener(`click`, prevSlide);
    document.querySelector(`.carousel .next`).addEventListener(`click`, nextSlide);
    renderSlides();

    window.addEventListener("resize", renderSlides);

    renderSlides();

})();