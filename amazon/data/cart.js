 export const cart = [];

export function cartQuantityUpdate(){
    let cartQuantity = 0;
    cart.forEach((cardItem) =>{
        cartQuantity+=cardItem.quantity;
    });
    document.querySelector(".card-quantity").innerHTML = cartQuantity;
    if(cartQuantity>9 && cartQuantity<99){
        document.querySelector(".card-quantity").style.right="46px";
        document.querySelector(".card-quantity").style.fontSize="14px";
        document.querySelector(".card-quantity").style.top="3px";
    }
     else if(cartQuantity>99 && cartQuantity<999){
        document.querySelector(".card-quantity").style.right="44px";
        document.querySelector(".card-quantity").style.fontSize="12px";
        document.querySelector(".card-quantity").style.top="4px";
    }
    else if(cartQuantity>999){
        document.querySelector(".card-quantity").style.right="42px";
        document.querySelector(".card-quantity").style.fontSize="10px";
        document.querySelector(".card-quantity").style.top="4px";
    }
};