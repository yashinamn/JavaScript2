class Products {
    constructor(container='.products') {
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this.allProductsSum = 0;
        this.init()
    }
    init(){
        this._fetchGoods();
        this._render();
    }
    _fetchGoods(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Keyboard', price: 70},
            {id: 3, title: 'Mouse', price: 46},
            {id: 4, title: 'Gamepad', price: 68},
            {id: 5, title: 'Chair', price: 168},
        ];
    }
    calcSum() {
       // let result = 0;
       // for (let prod of this.allProducts) {
       //     result += prod.price;
       // }
       // return result;
      return this.allProducts.reduce((accum, el) => accum + el.price, 0);
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let el of this.data) {
            const product = new ProductItem(el);
            this.allProducts.push(product);
            
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }
}

class ProductItem {
    constructor(product, img="https://placehold.it/200x150") {
        this.price = product.price;
        this.title = product.title;
        this.id = product.id;
        this.img = img
    }
    render(){
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

const products = new Products();
console.log(products.calcSum());


/*class Cart {
    constructor(container='.cart') {
            this.container = container;//тег корзины
            this.cartData = [];
            this.cartProducts = [];//товары в корзине
            this.countEl = null;//количество товаров
            this.priceEl = null;//цена товара
    }
    sum(){//считает сумму товаров

    }
    _render(){//рендерит корзину
        const block = document.querySelector(this.container);//находим элемент корзины в документе
        for (let el of this.cartData) {//перебираем все товары в корзине
            const cartProduct = new CartProductItem(el);//функциюю конструктор
            this.cartProducts.push(cartProduct);//добавляем каждуй товар в массив товаров
            block.insertAdjacentHTML('beforeend', cartProduct.render());//добавляем элементы  в дом
        }
    } 
     init(){
        //this._fetchGoods();
        this._render();
    }
}

class CartProductItem {//класс
    constructor(product, img="https://placehold.it/200x150") {//в аргументах сам продукт и картинка
        this.price = product.price;
        this.title = product.title;
        this.id = product.id;
        this.img = img
    }
    render(){//создаем дом структуру товара
        return `<div class="product-item">
                    <img src="${this.img}" alt="${this.title}">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">удалить</button>
                </div>`
    }
}
*/
//
// const renderProduct = (title, price, img="https://placehold.it/200x150") => {
//     return `<div class="product-item">
//                  <img src="${img}" alt="${title}">
//                  <div class="desc">
//                      <h3>${title}</h3>
//                      <p>${price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };
//
// const renderPage = list => {
//     const productList = list.map(item => renderProduct(item.title, item.price));
//     // document.querySelector(`.products`).innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
//     for(let el of productList){
//         document.querySelector(`.products`).insertAdjacentHTML('', el);
//     }
// };
//
// renderPage(products);

