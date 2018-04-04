var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var random=getRandomInt(100);
  var newItemObject={itemName:[item],itemprice:[random]}
  cart.push(newItemObject);
  return '${item} has been added to your cart.'
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
