const shop = document.getElementById('shop');
const menu = document.getElementById('categories');

const menuOpen = () => {
    menu.style.display = "block";
}

const menuClose = () => {
    menu.style.display = "none";
}
 
let basket = JSON.parse(localStorage.getItem("data")) || [];

// Produktdatat finns i variabeln shopData (se data.js)


const generateShop = () => {
    // Generera alla produkter med dynamisk HTML och Array.protype.map() samt join()
    // Använd denna markup för varje produktkort - den korresponderar mot CSS:en
    //
    return (shop.innerHTML = shopData.map((item) => {
        
        return `<div id=product-id-${item.id} class="item">
        <img width="220" src=${item.image} alt=""> 
        <div class="details">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="price-quantity">
            <h2>$ ${item.price}</h2>
            <div class="buttons">
                <i onclick="decrement(${item.id})" class="bi bi-dash-lg"></i>
                <div id=${item.id} class="quantity">
                </div>
                <div id=${item.id} class="quantity">???</div>
                <i onclick="increment(${item.id})" class="bi bi-plus-lg"></i>
            </div>
            </div>
        </div>
    </div>`
    }).join(' ')); 
}

generateShop()

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
    console.log(basket);
}

const decrement = (id) => {
    // Om användaren klickar på - på produkten 
}
