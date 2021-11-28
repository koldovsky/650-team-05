(async function() {
    const response = await fetch('bestsellers.json');
    const bestsellersProducts = await response.json();


    function renderBestsellersProducts(bestsellersProducts) {
        const bestsellersProductsContainer = document.querySelector('.shop-bestsellers');
        for (const bestsellersProduct of bestsellersProducts) {
            bestsellersProductsContainer.innerHTML += ` 
            <article class="shop-bestsellers-products">
                <a href="shop.html"><img class="shop-bestsellers-image" src="${bestsellersProduct.image}" alt="${bestsellersProduct.title}" /></a>
                <a href="shop.html"><p class="shop-bestsellers-products-name">${bestsellersProduct.title}</p></a>
                <p class="shop-bestsellers-price">${bestsellersProduct.price}</p>
                <button class="shop-bestsellers-button">${bestsellersProduct.button}</button>
            </article>`
            }
    }
    renderBestsellersProducts(bestsellersProducts)
})();
