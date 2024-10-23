 export let cart =JSON.parse(localStorage.getItem('cart'));

 if(!cart){

    cart= [{
       productId :"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
           quantity:1,
    }];
 }

 function saveToLocal(){
    localStorage.setItem('cart', JSON.stringify(cart));
 }

export function cartQuantityUpdate(){
    let cartQuantity = 0;
    cart.forEach((cardItem) =>{
        cartQuantity+=cardItem.quantity;
    });
 
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
    saveToLocal();
    return cartQuantity;
};

export function removeCartItem(productId){
    cart.forEach((item,index) =>{
        if(item.productId === productId){
            cart.splice(index,1);
        }
    });
    saveToLocal();
    
}

export function updateCartItem(button){
    let display = bu.querySelector(".value");
    let savebutton = button.querySelector(".btn");
    savebutton.addEventListener("click" , () =>{
        if(display.value){
            console.log(display.value);
            console.log(typeof(Number(display.value)));
        }
    })
    saveToLocal();
};
    
