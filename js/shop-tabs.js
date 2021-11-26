(async function () {

    const response = await fetch('products.json');
    const products = await response.json();

    let category = 'interior';

    function renderProducts(products, category) {

        const filteredProducts = products.filter(
            (product) => {
                if (category) {
                    return category === product.category;
                } else {
                    return true;
                }
            }
        );

        const productsContainer = document.querySelector('.shop-tabs-products');
        let html = '';

        for (const product of filteredProducts) {
            html += `
            <div class="shop-tabs-product">
                    <a href="shop.html"><img class="shop-tabs-product-img" src="${product.image}"
                            alt="${product.title}" /></a>
                    <a href="shop.html">
                        <p class="shop-tabs-product-name">${product.title}</p>
                    </a>
                    <p class="shop-tabs-product-price">$${product.price}</p>
                    <button class="shop-tabs-product-button">Add to card</button>
            </div>`
        }
        productsContainer.innerHTML = html;

    }

    renderProducts(products, category);

    function removeSelectedFilterClass(){
        const buttons = document.querySelectorAll('.shop-tabs-category-button');
        for (const button of buttons){
            button.classList.remove('selected')
        }
    }

    document.querySelector('.shop-tabs-button-interior').addEventListener('click', (ev) => {
        removeSelectedFilterClass();
        ev.target.classList.add('selected');
        category = 'interior'
        renderProducts(products, category);
    });
    document.querySelector('.shop-tabs-button-wreaths').addEventListener('click', (ev) => {
        removeSelectedFilterClass();
        ev.target.classList.add('selected');
        category = 'wreaths'
        renderProducts(products, category);
    });
    document.querySelector('.shop-tabs-button-christmas-balls').addEventListener('click', (ev) => {
        removeSelectedFilterClass();
        ev.target.classList.add('selected');
        category = 'christmas-balls'
        renderProducts(products, category);
    });
    document.querySelector('.shop-tabs-button-stockings').addEventListener('click', (ev) => {
        removeSelectedFilterClass();
        ev.target.classList.add('selected');
        category = 'stockings'
        renderProducts(products, category);
    });

})();