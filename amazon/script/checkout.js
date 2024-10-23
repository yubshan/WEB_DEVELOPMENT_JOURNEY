
import { cart } from "../data/cart.js";
import { updateCartItem } from "../data/cart.js";
import { removeCartItem } from "../data/cart.js";
import { products } from "../data/products.js";
let cartHTML = '';
let cartNumber=cart.length;
document.querySelector(".return-to-home-link")
.innerHTML = cartNumber+' items' ;
cart.forEach((item)=>{
   
     products.forEach((product) =>{
        if(item.productId === product.id){
            cartHTML += `
           <div class="cart-item-container js-remove-item-${product.id}">
              <div class="delivery-date">
                Delivery date: Tuesday, June 21
              </div>
  
              <div class="cart-item-details-grid">
                <img class="product-image" src=${product.image}>
  
                <div class="cart-item-details">
                  <div class="product-name">
                  ${product.name}
                  </div>
                  <div class="product-price">
                  $${((product.priceCents)/100).toFixed(2)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${item.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update " data-product-id="${product.id}">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete" data-delete = ${product.id}>
                      Delete
                    </span>
                  </div>
                </div>
  
                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  <div class="delivery-option">
                    <input type="radio" checked="" class="delivery-option-input" name="delivery-option-${product.id}">
                    <div>
                      <div class="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div class="delivery-option-price">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio" class="delivery-option-input" name="delivery-option-${product.id}">
                    <div>
                      <div class="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div class="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio" class="delivery-option-input" name="delivery-option-${product.id}">
                    <div>
                      <div class="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div class="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
    `
        }
     })
})
document.querySelector(".order-summary")
.innerHTML = cartHTML;


document.querySelectorAll(".js-update")
.forEach((link)=>{
    link.addEventListener("click", ()=>{
        const productId = link.dataset.productId;
        console.log(productId)
        // button.innerHTML=`
        //         <input type="text" class="value">
        //         <span class="update-quantity-link link-primary btn">
        //             Save
        //         </span>
        // `;
        //  updateCartItem(button);
    });
});


document.querySelectorAll(".js-delete")
.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const productId = button.dataset.delete;
        removeCartItem(productId);

        console.log(cart);
        document.querySelector(`.js-remove-item-${productId}`).remove();
    });
});