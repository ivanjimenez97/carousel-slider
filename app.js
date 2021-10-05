const productCarousel = document.querySelector(".product-carousel");
const productSlider = document.querySelector(".product-slider");

const nextProductItem = document.querySelector("#NextItemBtn");

const productItem = document.getElementsByClassName("product-item");
const productItemNumber = productItem.length;
const totalPartSlider = 100 / productItemNumber;

const currentProductItem = productSlider.firstElementChild;

let direction;

nextProductItem.addEventListener("click", function(){
    direction = -1;
    productCarousel.style.justifyContent = 'flex-start';
    productSlider.style.transform = 'translate(-200px)';
    //console.log("Number of items: " + productItemNumber);
    //console.log("El porcentaje por cada elemento es de: " + totalPartSlider+'%');
});

//productSlider.appendChild(productSlider.firstElementChild);

productSlider.addEventListener("transitionend", function(){
    if (direction === 1) {
        productSlider.prepend(productSlider.lastElementChild);
        
        
    } else {
        productSlider.appendChild(productSlider.firstElementChild);
        productSlider.firstElementChild.classList.add("active");
        productSlider.lastElementChild.classList.remove("active");
    }

    productSlider.style.transition = 'none';
    productSlider.style.transform = 'translate(0)';
    setTimeout(() => {
        productSlider.style.transition = 'all 0.5s';
    })
}, false);
