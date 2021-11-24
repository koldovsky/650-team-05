(function() {
    const bestsellersProducts = [
        {
            id: "1",
            image: "img/bestsellers/citrus_wreath.png",
            title: "Citrus Wreath",
            price: "$89,00",
            button: "Add to cart"
        },
        {
            id: "2",
            image: "img/bestsellers/snowman.png",
            title: "Snowman",
            price: "$10,00",
            button: "Add to cart"
        },
        {
            id: "3",
            image: "img/bestsellers/wreath_with_pine_cons.png",
            title: "Wreath With Pine Cons",
            price: "$98,00",
            button: "Add to cart"
        },
        {
            id: "4",
            image: "img/bestsellers/white_deer.png",
            title: "White Deer",
            price: "$12,00",
            button: "Add to cart"
        },
    ]
    
    function renderBestsellersProducts(bestsellersProducts) {
    const shopBestsellersContainer = document.querySelector('.shop-bestsellers');
    for (const bestsellersProduct of bestsellersProducts) {
        shopBestsellersContainer.innerHTML += ' 
        <div class="shop-bestsellers-products">
        <a href="shop.html"><img src="${bestsellersProducts.image}" alt="${bestsellersProducts.title}" /></a>
        <a href="shop.html"><p>${bestsellersProducts.title}</p></a>
        <p >${bestsellersProducts.price}</p>
        <button>${bestsellersProducts.button}</button>
    </div>'
    }
    }
    
    
    
    })();