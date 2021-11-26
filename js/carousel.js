// Natalia partner-blog
(function() {
    const partnerBlogSlides = [
        {
            id: "1",
            image: "img/partner-blog/family_with_gifts.webp",
            symbol: "img/partner-blog/star.svg",
            text: "TIPS",
            title: "How to Beautifully Wrap Christmas Gifts",
            description: "You will find a huge selection of wrapping paper in our store. The most popular kinds are those with snowflakes, Santa Claus, deer. Plain craft paper is also gaining popularity, especially with contrast shining bands. And now we will tell you how to wrap gifts like a pro.",
            date: "December 03, 2020 | by Erica White"
        },
        {
            id: "2",
            image: "img/partner-blog/christmas_tree.webp",
            symbol: "img/partner-blog/decoration.svg",
            text: "DECORATION",
            title: "The Best Color Combinations for Your Christmas Tree",
            description: "We all want our Christmas tree to look like pictures from a fashion magazine. But when we start decorating it, it looks not as stylish as we want it to be. We asked several stylists about how to achieve the perfect Christmas look and create a New Year's interior you can be proud of.",
            date: "December 02, 2020 | by Erica White"
        },
        {
            id: "3",
            image: "img/partner-blog/santa_claus.webp",
            symbol: "img/partner-blog/star.svg",
            text: "TIPS",
            title: " Mission Possible: Buying Gifts for Everyone in One Place",
            description: "Christmas holidays are not only about decorations but also about buying presents literally for everyone. If you're going to celebrate with your family and/or friends, you'd better hurry up and start making up lists of presents. And yes, it's possible to buy everything in one place.",
            date: "December 03, 2020 | by Erica White"
        }
    ];

    function renderPartnerBlogSlides(partnerBlogSlides) {
        const partnerBlogSlidesContainer = document.querySelector('.partners-blog-carousel-slides-container');
        for (const partnerBlogSlide of partnerBlogSlides) {
            partnerBlogSlidesContainer.innerHTML += ` 
            <div class="partners-blog-slide-1">
            <div class="partners-blog-image">
                <img src="${partnerBlogSlide.image}" alt="Family with gifts" />
            </div>
            <div class="partners-blog-symbol">
                <img class="partner-blog-star" src="${partnerBlogSlide.symbol}" alt="Star" />
                <p class="partners-blog-symbol-name">${partnerBlogSlide.text}</p>
            </div>
            <h3 class="partners-blog-title">${partnerBlogSlide.title}</h3>
            <p class="partners-blog-text">${partnerBlogSlide.description}
            </p>
            <p class="partners-blog-date">${partnerBlogSlide.date}</p>
        </div>`
            }
    }
    renderPartnerBlogSlides(partnerBlogSlides)

    (function renderSlides() {
        let currentSlideIdx = 0;
        const partnerBlogSlidesContainer = document.querySelector('.partners-blog-carousel .partners-blog-carousel-slides-container');
        partnerBlogSlidesContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 767) {
            const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            partnerBlogSlidesContainer.innerHTML += slides[slide2Idx];
        }
        
    
        function goToSlide (num) {
            currentSlideIdx = num;
            renderSlides();
        }

        document.querySelector('.partners-blog-carousel-button-1').addEventListener('click',
            () => goToSlide(0)
        )
        document.querySelector('.partners-blog-carousel-button-2').addEventListener('click',
        () => goToSlide(1)
        )
        document.querySelector('.partners-blog-carousel-button-3').addEventListener('click', 
        () => goToSlide(2)
        )
        renderSlides()
    })();
})()