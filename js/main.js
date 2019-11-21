const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Keyboard', price: 70},
    {id: 3, title: 'Mouse', price: 46},
    {id: 4, title: 'Gamepad', price: 68},
    {id: 5, title: 'Chair', price: 168},
    {id: 6, title: 'Table', price: 158},
];

const renderProduct = (title, price, img="https://placehold.it/200x150") => {
    return `<div class="product-item">
                <img src="${img}" alt="${title}">
                <h3 class="product-title">${title}</h3>
                <p class="product-price">${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price)).join(" ");
    document.querySelector(`.products`).innerHTML = productList;
};

renderPage(products);

