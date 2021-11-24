(function() {
    const slides = [{

            id: "1",

            image: '< div > < img scr = "img / testimonials - testimonials / family.webp " alt="# "> < /div>',
            title: "Dean and Alice Peterson",
            description: "Christmas is a spacial time! We always buy Christmas Decorations in advance. For the third year now? we have been making orders in this store and are completely satisfied with the quality of each bauble purchased",
            date: "December 15, 2019"

        },
        {

            id: "2",

            image: '< div > < img scr = "img/testimonials - testimonials / happy - family.jpeg " alt="# "> < /div >',
            title: "Susan Owler",
            description: "My daughter is four years old and she has been waiting for Christmas preparation since October! We start decorating the Christmas tree in early December, and I always buy something new at Christmas Decorations shop.",
            date: "December 08, 2018"

        },
        {
            id: "3",

            image: '< div > < img scr = "img/testimonials-testimonials/happy-family-with-tree.jpg" alt="# " > < /div>',
            title: "Daniella Lencington",
            description: "The anticipation of Christmas is the best thing in December. I like the feeling that magic is coming and try to start Christmas decorations in early December. This year, I have bought a new X-mas tree and lots of baubles.",
            date: "December 02, 2020"
        }
    ]


    let carrentSlideIdx = 0;

    function renderSlides() {
        const slidesContainer = document.querySelector(".carousel.slides - container");
        slidesContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 600) {
            const slide2Idx = carrentSlideIdx + 1 >= slides.length ? 0 : carrentSlideIdx + 1;
            slidesContainer.innerHTML += slides[slide2Idx];
            if (window.innerWidth > 800) {
                const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
                slidesContainer.innerHTML += slides[slide3Idx];
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
    document.querySelector(".carousel .prev").addEventListener("click", prevSlide);
    document.querySelector(".carousel .next").addEventListener("click", nextSlide);
    renderSlides();

    window.addEventListener("resize", renderSlides);
})();