(function () {
    const products = [
        {
            id: "1",
            title: "Red Boot",
            image: "../img/shop/red-boot.jpg",
            price: "18.00",
            category:"interior"
        },
        {
            id: "2",
            title: "White Deer",
            image: "../img/shop/white-deer.jpg",
            price: "12.00",
            category:"interior"
        },
        {
            id: "3",
            title: "Gift Box",
            image: "../img/shop/gift-box.jpg",
            price: "12.00",
            category:"interior"
        },
        {
            id: "4",
            title: "Snowman",
            image: "../img/shop/snowman.jpg",
            price: "10.00",
            category:"interior"
        },
        {
            id: "5",
            title: "Elegant Wreath",
            image: "../img/shop/elegant-wreath.png",
            price: "78.00",
            category: "wreaths"
        },
        {
            id: "6",
            title: "Wreath With Pine Cons",
            image: "../img/shop/wreath-with-pine-cons.png",
            price: "98.00",
            category: "wreaths"
        },
        {
            id: "7",
            title: "Cinnamon Wreath",
            image: "../img/shop/cinnamon-wreath.png",
            price: "95.00",
            category: "wreaths"
        },
        {
            id: "8",
            title: "Citrus Wreath",
            image: "../img/shop/citrus-wreath.png",
            price: "89.00",
            category: "wreaths"
        },
        {
            id: "9",
            title: "Red Christmas Balls",
            image: "../img/shop/red-christmas-balls.png",
            price: "20.00",
            category: "christmas-balls"
        },
        {
            id: "10",
            title: "Silver Christmas Balls",
            image: "../img/shop/silver-christmas-balls.png",
            price: "10.00",
            category: "christmas-balls"
        },
        {
            id: "11",
            title: "Green Christmas Balls",
            image: "../img/shop/green-christmas-balls.png",
            price: "10.00",
            category: "christmas-balls"
        },
        {
            id: "12",
            title: "Gold Christmas Balls",
            image: "../img/shop/gold-christmas-balls.png",
            price: "10.00",
            category: "christmas-balls"
        },
        {
            id: "13",
            title: "Santa Claus Stocking",
            image: "../img/shop/santa-claus-stocking.png",
            price: "15.00",
            category: "stockings"
        },
        {
            id: "14",
            title: "Christmas Red Stocking",
            image: "../img/shop/christmas-red-stocking.png",
            price: "22.00",
            category: "stockings"
        },
        {
            id: "15",
            title: "Stocking With Pompons",
            image: "../img/shop/stocking-with-pompons.png",
            price: "22.00",
            category: "stockings"
        },
        {
            id: "16",
            title: "Stocking With Balls",
            image: "../img/shop/stocking-with-balls.png",
            price: "18.00",
            category: "stockings"
        }
    ];

    let sortDirection = '';
    let category;

    function renderProducts(products, sortDirection, category) {

        const filteredProducts = products.filter(
            (product) => {
                if(category) {
                    return category === product.category
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
                <a href="../shop.html"><img class="shop-product-img" src="${product.image}"
                 alt="${product.title}"></a>
                <a class="shop-product-name" href="../shop.html">
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