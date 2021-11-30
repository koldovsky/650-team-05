// Natalia partner-blog
(function() {
    const slides = [
        '<div class="partners-blog-slide-1"><div class="partners-blog-image"><img src="img/partner-blog/family_with_gifts.jpg" alt="Family with gifts" /></div><div class="partners-blog-symbol"><img class="partner-blog-star" src="img/partner-blog/star.svg" alt="Star" /><p class="partners-blog-symbol-name">TIPS</p></div><h3 class="partners-blog-title1">How to Beautifully Wrap Christmas Gifts</h3><p class="partners-blog-text">You will find a huge selection of wrapping paper in our store. The most popular kinds are those with snowflakes, Santa Claus, deer. Plain craft paper is also gaining popularity, especially with contrast shining bands. And now we will tell you how to wrap gifts like a pro.</p><p class="partners-blog-date">December 03, 2020 | by Erica White</p></div>',
        '<div class="partners-blog-slide-2"><div class="partners-blog-image"><img class="partners-blog-image" src="img/partner-blog/christmas_tree.jpg" alt="christmas tree" /></div><div class="partners-blog-symbol"><img class="partner-blog-hat" src="img/partner-blog/decoration.svg" alt="symbol hat" /><p class="partners-blog-symbol-name">DECORATION</p></div><h3 class="partners-blog-title">The Best Color Combinations for Your Christmas Tree</h3><p class="partners-blog-text">We all want our Christmas tree to look like pictures from a fashion magazine. But when we start decorating it, it looks not as stylish as we want it to be. We asked several stylists about how to achieve the perfect Christmas look and create a New Year\'s interior you can be proud of.</p><p class="partners-blog-date">December 02, 2020 | by Erica White</p></div>',
        '<div class="partners-blog-slide-3"><div class="partners-blog-image"><img class="partners-blog-image" src="img/partner-blog/santa_claus.jpg" alt="santa claus" /></div><div class="partners-blog-symbol"><img class="partner-blog-star" src="img/partner-blog/star.svg" alt="star" /><p class="partners-blog-symbol-name">TIPS</p></div><h3 class="partners-blog-title">Mission Possible: Buying Gifts for Everyone in One Place</h3><p class="partners-blog-text">Christmas holidays are not only about decorations but also about buying presents literally for everyone. If you\'re going to celebrate with your family and/or friends, you\'d  better hurry up and start making up lists of presents. And yes, it\'s possible  to buy everything in one place.</p><p class="partners-blog-date">December 03, 2020 | by Erica White</p></div>'
    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesContainer = document.querySelector('.partners-blog-carousel .partners-blog-carousel-slides-container');
        slidesContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 767) {
            const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slidesContainer.innerHTML += slides[slide2Idx];
        }
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
    renderSlides();

})();