const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
    {
        id: 1,
        title: "'PIZZA",
        price: 550,
        type: [
            {
                make: 'HAWIYAN',
                img: './img/pizza.png'
            }, {
                make: 'WATERMELON PIZZA',
                img: './project images/food 4.png'
            }
        ]
    },
    {
        id: 2,
        title: "'PIZZA",
        price: 550,
        type: [
            {
                make: 'HAWIYAN',
                img: './img/pizza.png'
            }, {
                make: 'WATERMELON PIZZA',
                img: './project images/food 4.png'
            }
        ]
    },
    {
        id: 3,
        title: "'PIZZA",
        price: 550,
        type: [
            {
                make: 'HAWIYAN',
                img: './img/pizza.png'
            }, {
                make: 'WATERMELON PIZZA',
                img: './project images/food 4.png'
            }
        ]
    },
    {
        id: 4,
        title: "'PIZZA",
        price: 550,
        type: [
            {
                make: 'HAWIYAN',
                img: './img/pizza.png'
            }, {
                make: 'WATERMELON PIZZA',
                img: './project images/food 4.png'
            }
        ]
    },
    {
        id: 5,
        title: "'PIZZA",
        price: 550,
        type: [
            {
                make: 'HAWIYAN',
                img: './img/pizza.png'
            }, {
                make: 'WATERMELON PIZZA',
                img: './project images/food 4.png'
            }
        ]
    }
];
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSize = document.querySelector(".size");

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        //change current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        //change text of current products
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "KSH:" + choosenPrice.price;
        currentProductImg.src = choosenProduct.type[0].img;

    });
});
const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
    payment.style.display = "flex";
});
close.addEventListener('click', () => {
    payment.style.display = "none";
});