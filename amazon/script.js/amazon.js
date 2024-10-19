import {cart} from "../data/cart.js";
import { products } from "../data/products.js";
import { cartQuantityUpdate } from "../data/cart.js";


let productsListForHTML ='';
products.forEach((product)=>{
    productsListForHTML +=`
    <div class="product-container">
                <div class="product-image-container">
                        <img class="product-image" src="${product.image}">
                    
                </div>
                <div class="product-name limit-text-to-2-lines">
                ${product.name}
                </div>
                <div class="product-rating-container">
                    <img class="product-rating-stars" src="images/ratings/rating-${(product.rating.stars)*10}.png">
                    <div class="product-rating-count link-primary">
                    ${product.rating.count}
                      </div>
                </div>  
                <div class="product-price">$${(product.priceCents /100).toFixed(2)}
                </div>
                <div class="product-quantity-container">
                    <select class="js-select">
                      <option selected="" value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="added-to-cart  js-added-to-cart-${product.id}">
                      <img src="images/icons/checkmark.png">
                      Added
                    </div>
                    <button class="add-to-cart-button button-primary js-container-button" data-product-ID = "${product.id}">
                      Add to Cart
                    </button>
                </div>
   `
})
document.querySelector(".product-grid").innerHTML = productsListForHTML;

// add-to-cart-button update function 
function addToCart(productId) {
    let selectElement = document.querySelector(".js-select");
    
    let matchItem;
    cart.forEach((item)=>{
        if(productId === item.productId){
            matchItem = item;
        }
    });
    (matchItem) ? matchItem.quantity += Number(selectElement.value) : cart.push({
        productId :productId,
        quantity:Number(selectElement.value),
    });
    
};

let timeoutId ;
// add-to-cart-button update and card quantity in nav update
document.querySelectorAll(".js-container-button")
.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        const productId = button.dataset.productId;
        document.querySelector(`.js-added-to-cart-${productId}`).classList.add("onclick-animation");
        timeoutId= setTimeout(() => {
            document.querySelector(`.js-added-to-cart-${productId}`).classList.remove("onclick-animation");
            
        }, 5000);
        addToCart(productId);
        cartQuantityUpdate();
    });
});