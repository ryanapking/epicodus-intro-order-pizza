// Back end logic
function Pizza() {
  this.size = "s";
  this.toppings = [];
  this.basePrice = 10;
  this.individualToppingPrice = 1;
  this.totalToppingPrice = 0;
  this.totalPizzaPrice = 10;
};

Pizza.prototype.setBasePrices = function(size) {
  if (size === "s") {
    this.basePrice = 10;
    this.individualToppingPrice = 1;
  } else if (size === "m") {
    this.basePrice = 12;
    this.individualToppingPrice = 1.5;
  } else if (size === "l") {
    this.basePrice = 14;
    this.individualToppingPrice = 2;
  }
};

Pizza.prototype.setIndividualToppingPrice = function() {

};

Pizza.prototype.setTotalToppingPrice = function() {

};

Pizza.prototype.setTotalPizzaPrice = function() {

};
