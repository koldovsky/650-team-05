(async function () {

    const response = await fetch('products.json');
    const products = await response.json();


    let sortDirection = '';
    let category;

    function renderProducts(products, sortDirection, category) {

        const filteredProducts = products.filter(
            (product) => {
                if(category) {
                    return category === product.category;
                }else {
                    return true;
                }
            }
        );

        let sortedProducts = [...filteredProducts];
        if (sortDirection === 'ascending' || sortDirection === 'descending') {
            sortedProducts.sort(
                (a, b) => sortDirection === "ascending" ? a.price - b.price : b.price - a.price
            )
        }
        const productsContainer = document.querySelector('.shop-products');
        let html = '';

        for (const product of sortedProducts) {
            html += `
            <article class="shop-product">
                <a href="shop.html"><img class="shop-product-img" src="${product.image}"
                 alt="${product.title}"></a>
                <a class="shop-product-name" href="shop.html">
                    <p>${product.title}</p>
                </a>
                <p class="shop-product-price">$${product.price}</p>
                <button class="shop-product-button">Buy</button>
            </article>`;
        }
        productsContainer.innerHTML = html;
    }

    renderProducts(products,sortDirection,category);

    const buttonSortAscending = document.querySelector('.button-sort-asc');
    buttonSortAscending.addEventListener('click', sortAscending);

    function sortAscending() {
        sortDirection = 'ascending';
        renderProducts(products, sortDirection,category);
    }

    const buttonSortDescending = document.querySelector('.button-sort-desc');
    buttonSortDescending.addEventListener('click', sortDescending);

    function sortDescending() {
        sortDirection = 'descending';
        renderProducts(products, sortDirection,category);
    }

    function removeSelectedFilterClass(){
        const buttons = document.querySelectorAll('.category-button');
        for (const button of buttons){
            button.classList.remove('selected');
        }
    }

    document.querySelector('.button-interior').addEventListener('click',(ev) => {
        removeSelectedFilterClass();
        ev.target.classList.add('selected');
        category = 'interior'
        renderProducts(products,sortDirection,category);
    });
    document.querySelector('.button-wreaths').addEventListener('click',(ev) => {
        removeSelectedFilterClass();
        ev.target.classList.add('selected');
        category = 'wreaths'
        renderProducts(products,sortDirection,category);
    });
    document.querySelector('.button-christmas-balls').addEventListener('click',(ev) => {
        removeSelectedFilterClass();
        ev.target.classList.add('selected');
        category = 'christmas-balls'
        renderProducts(products,sortDirection,category);
    });
    document.querySelector('.button-stockings').addEventListener('click',(ev) => {
        removeSelectedFilterClass();
        ev.target.classList.add('selected');
        category = 'stockings'
        renderProducts(products,sortDirection,category);
    });
    document.querySelector('.button-all').addEventListener('click',(ev) => {
        removeSelectedFilterClass();
        ev.target.classList.add('selected');
        category = ''
        renderProducts(products,sortDirection,category);
    });


})();