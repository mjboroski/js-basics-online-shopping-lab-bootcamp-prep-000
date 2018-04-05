var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price=getRandomInt(1,100);
  var newItemObject={itemName:item,itemPrice:price}
  cart.push(newItemObject);
  return item +' has been added to your cart.'
}

function viewCart() {
  if(getCart().length==0){
    return "Your shopping cart is empty.";
  }
  if(getCart().length==1){
    return 'In your cart, you have '+getCart()[0].itemName+' at $'+getCart()[0].itemPrice+'.';
  }
  else{
    var tempString = 'In your cart, you have';
    for(var i=0;i<getCart().length-1;i++){
      tempString=tempString+' '+getCart()[i].itemName+' at $'+getCart()[i].itemPrice+',';
    }
    tempString=tempString+' and '+getCart()[getCart().length-1].itemName+' at $'+getCart()[getCart().length-1].itemPrice+'.';
    return tempString;
  }
}

function total() {
  var total=0
  for(var i=0;i<getCart().length;i++){
    total=total+getCart()[i].itemPrice;
  }
return total;
}

function removeFromCart(item) {
  var itemNumber = cart.indexOf(item);
  getCart().splice(itemNumber,1)
}

function placeOrder(cardNumber) {
  // write your code here
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
