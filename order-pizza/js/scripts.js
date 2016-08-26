// Back end logic
function Pizza() {
  this.size = "s";
  this.toppings = [];
  this.basePrice = 10;
  this.individualToppingPrice = 1;
  this.totalPizzaPrice = 10;
};

Pizza.prototype.setBasePrices = function() {
  if (this.size === "s") {
    this.basePrice = 10;
    this.individualToppingPrice = 1;
  } else if (this.size === "m") {
    this.basePrice = 12;
    this.individualToppingPrice = 1.5;
  } else if (this.size === "l") {
    this.basePrice = 14;
    this.individualToppingPrice = 2;
  }
};

Pizza.prototype.setTotalPizzaPrice = function() {
  this.totalPizzaPrice = this.basePrice + (this.toppings.length * this.individualToppingPrice);
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  this.setTotalPizzaPrice();
};

Pizza.prototype.changeSize = function(newSize) {
  this.size = newSize;
  this.setBasePrices();
  this.setTotalPizzaPrice();
};

// Pizza.prototype.
