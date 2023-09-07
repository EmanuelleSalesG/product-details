const images = document.querySelectorAll('.images');

const addToCart = document.querySelector('.add-item');
const subToCart = document.querySelector('.sub-item');
const quantity = document.querySelector('.update-items');

let count = 0;

images.forEach((image) => {
    image.addEventListener('click', () => {
        document.querySelector('.slide').src = image.src;
    });  
});

addToCart.addEventListener("click", () =>{
    count++;
    quantity.innerHTML = 
    `${count}`;
});

subToCart.addEventListener("click", () =>{
    if(count > 1){
        count--;
        quantity.innerHTML = 
        `${count}`;
    }
});
