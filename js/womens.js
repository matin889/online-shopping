const shop = document.getElementById('shop');
const menu = document.getElementById('categories');
const close =document.getElementById('close');
const open = document.getElementById('open');

 menuFunction = (a, b, c) => {
    a.addEventListener("click",() => {
        a.classList.toggle('hide');
        b.classList.toggle('hide');

        if(c == 'menu-open') {
            menu.classList.toggle("slide");
        }
        if(c == 'menu-close') {
            menu.classList.toggle("slide");
        }
    })
}
menuFunction(open, close, "menu-open");
menuFunction(close, open, "menu-close");
let basket = JSON.parse(localStorage.getItem("data")) || [];
// Produktdatat finns i variabeln shopData (se data.js)
const generateShop = () => {
    // Generera alla produkter med dynamisk HTML och Array.protype.map() samt join()
    // Använd denna markup för varje produktkort - den korresponderar mot CSS:en
    //
    const womens = shopData.filter((item) => {
        return item.category === "women's clothing";
    })
    return (shop.innerHTML = womens.map((item) => { 
        return `<div id=product-id-${item.id} class="item">
        <img width="220" src=${item.image} alt=""> 
        <div id="details" class="details">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span id="read"></span>
            <div class="price-quantity">
            <h2>$ ${item.price}</h2>
            <div class="buttons">
                <i onclick="decrement(${item.id})" class="bi bi-dash-lg"></i>
                <div id=${item.id} class="quantity">0</div>
                <i onclick="increment(${item.id})" class="bi bi-plus-lg"></i>
            </div>
            </div>
        </div>
    </div>`
    }).join(' ')); 
}

generateShop()

const readSpan = document.getElementById('read');
const detailsText = document.getElementById('details');

console.log(readSpan);

readSpan.addEventListener('click', function() {
    const selectedSpan = readSpan;
    console.log(selectedSpan);
    detailsText.classList.toggle('active');
    console.log("it is working");

    })

const increment = (id) => {
    // Om användaren klickar på + på produkten 
    const selectedProduct = id;
    const productInBasket = basket.find((a) =>
        a.id === selectedProduct)
    if (productInBasket === undefined) {
        basket.push ({
            id: selectedProduct,
            item: 1,
        })
    } else {
        productInBasket.item += 1;
    }
    localStorage.setItem('data', JSON.stringify(basket));
    updateItem(selectedProduct);
}

const decrement = (id) => {
    // Om användaren klickar på - på produkten 
    const selectedProduct = id;
    const productInBasket = basket.find((a) =>
        a.id === selectedProduct)
        if (productInBasket === undefined) {
            return;
        }
        else if (productInBasket.item === 0) {
        return;
        } else {
        productInBasket.item -= 1;
        }
        // console.log(basket);
        localStorage.setItem('data', JSON.stringify(basket));
        updateItem(selectedProduct);
}

const updateItem = (id) => {
    const selectedProduct = id;
    const productInBasket = basket.find((a) =>
        a.id === selectedProduct)
    const quantity = document.getElementById(id);
    quantity.innerHTML = productInBasket.item;
    // console.log(productInBasket.item);
    basketItem();
}

const basketItem = () => {
    const cart = document.getElementById('cartAmount');
    const toatalItem = basket.reduce((a, b) =>
        {return a + b.item}, 0)
    cart.innerHTML = toatalItem;
    console.log(toatalItem);
}
basketItem()