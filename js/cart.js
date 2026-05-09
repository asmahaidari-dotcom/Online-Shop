let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
   {
    "id": 1,
    "name": "MASCARA",
    "price": 100,
    "image": "images/cart1.png"
  },
  {
    "id": 2,
    "name": "Cushion Foundation",
    "price": 300,
    "image": "images/cart7.png"
  },
  {
    "id": 3,
    "name": "Lipstick",
    "price": 200,
    "image": "images/cart3.png"
  },
  {
    "id": 4,
    "name": "Eyeshadow Palette",
    "price": 800,
    "image": "images/cart4.png"
  },
  {
    "id": 5,
    "name": "Perfume Set",
    "price": 300,
    "image": "images/cart8.png"
  },
  { 
    "id": 6,
    "name": "Concealer",
    "price": 100,
    "image": "images/cart6.png"
  },

];
let listCards = [];

function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
        `;

        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }

    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if(value != null){
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;

            let newDiv = document.createElement('li');

            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>

                    <div class="count">${value.quantity}</div>

                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;

            listCard.appendChild(newDiv);
        }
    })

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }

    reloadCard();
}