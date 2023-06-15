class CartItem {
    constructor(productName, productPrice, productQuantity) {
      this.productName = productName;
      this.productPrice = productPrice;
      this.productQuantity = productQuantity;
    }
  };
  
  class Cart {
    constructor() {
      this.cart = [];
    }
};
  
    addItemToCart(productName, productPrice, productQuantity) {
      let cartItem = new CartItem(productName, productPrice, productQuantity);
      this.cart.push(cartItem);
      this.saveCart();
    };
  
    calculateTotalPrice() {
      let totalCost = 0;
      for (let i = 0; i < this.cart.length; i++) {
        totalCost += this.cart[i].productPrice * this.cart[i].productQuantity;
      }
      return totalCost;
    };
  
    removeItemFromCart(productName) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].productName === productName) {
          this.cart.splice(i, 1);
          break;
        }
      }
      this.saveCart();
    };
  
    updateCart(productName, productQuantity) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].productName === productName) {
          this.cart[i].productQuantity = productQuantity;
          break;
        }
      }
      this.saveCart();
    };
  
    clearCart() {
      this.cart = [];
      this.saveCart();
    };
  
   