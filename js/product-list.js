(async function () {
    let sortDirection = '';
    let category;
    let products;
    let currencyRatio = 1;
    let convertTo = 'USD';


    async function refreshProducts(){
        const response = await fetch('products.json');
        products = await response.json();
        renderProducts(products,sortDirection,category);
    }

    async function convertCurrency() {
    const responce = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const rates = await responce.json();
    convertTo = document.querySelector('.currency').value.toUpperCase();
    currencyRatio = rates.rates[convertTo];
    renderProducts(products, sortDirection, category);
  }

    await refreshProducts();

    // setInterval(refreshProducts, 10000);

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
                <p class="shop-product-price">${(product.price * currencyRatio).toFixed(2) + ' ' + convertTo}</p>
                <button class="shop-product-button">Buy</button>
            </article>`;
        }
        productsContainer.innerHTML = html;
    }

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
    document.querySelector('.refresh-products').addEventListener('click', refreshProducts);
    document.querySelector('.convert').addEventListener('click', convertCurrency);


})();