(function () {
    const products = [
        {
            id: "1",
            title: "Red Boot",
            image: "../img/shop/red-boot.jpg",
            price: "18.00"
        },
        {
            id: "2",
            title: "White Deer",
            image: "../img/shop/white-deer.jpg",
            price: "12.00"
        },
        {
            id: "3",
            title: "Gift Box",
            image: "../img/shop/gift-box.jpg",
            price: "12.00"
        },
        {
            id: "4",
            title: "Snowman",
            image: "../img/shop/snowman.jpg",
            price: "10.00"
        },
        {
            id: "5",
            title: "Elegant Wreath",
            image: "../img/shop/elegant-wreath.png",
            price: "78.00"
        },
        {
            id: "6",
            title: "Wreath With Pine Cons",
            image: "../img/shop/wreath-with-pine-cons.png",
            price: "98.00"
        },
        {
            id: "7",
            title: "Cinnamon Wreath",
            image: "../img/shop/cinnamon-wreath.png",
            price: "95.00"
        },
        {
            id: "8",
            title: "Citrus Wreath",
            image: "../img/shop/citrus-wreath.png",
            price: "89.00"
        },
        {
            id: "9",
            title: "Red Christmas Balls",
            image: "../img/shop/red-christmas-balls.png",
            price: "20.00"
        },
        {
            id: "10",
            title: "Silver Christmas Balls",
            image: "../img/shop/silver-christmas-balls.png",
            price: "10.00"
        },
        {
            id: "11",
            title: "Green Christmas Balls",
            image: "../img/shop/green-christmas-balls.png",
            price: "10.00"
        },
        {
            id: "12",
            title: "Gold Christmas Balls",
            image: "../img/shop/gold-christmas-balls.png",
            price: "10.00"
        },
        {
            id: "13",
            title: "Santa Claus Stocking",
            image: "../img/shop/santa-claus-stocking.png",
            price: "15.00"
        },
        {
            id: "14",
            title: "Christmas Red Stocking",
            image: "../img/shop/christmas-red-stocking.png",
            price: "22.00"
        },
        {
            id: "15",
            title: "Stocking With Pompons",
            image: "../img/shop/stocking-with-pompons.png",
            price: "22.00"
        },
        {
            id: "16",
            title: "Stocking With Balls",
            image: "../img/shop/stocking-with-balls.png",
            price: "18.00"
        }
    ];

    function renderProducts(products) {
        const productContainer = document.querySelector('.shop-products');
        for (const product of products) {
            productContainer.innerHTML += `
            <article class="shop-product">
                <a href="../shop.html"><img class="shop-product-img" src="${product.image}" alt="${product.title}"></a>
                <a class="shop-product-name" href="../shop.html">
                    <p>${product.title}</p>
                </a>
                <p class="shop-product-price">${product.price}</p>
                <button class="shop-product-button">Buy</button>
            </article>`;
        }
    }
    renderProducts(products);
})();