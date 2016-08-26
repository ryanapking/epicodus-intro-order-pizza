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

Pizza.prototype.getTotalPrice = function() {
  return this.totalPizzaPrice;
};

// User interface logic
$(document).ready(function() {
  var currentPizza = new Pizza();
  $(".toppingPrice").text(currentPizza.individualToppingPrice.toFixed(2));
  $("#totalPrice").text(currentPizza.totalPizzaPrice.toFixed(2));
  $("#basePrice").text(currentPizza.basePrice.toFixed(2));

  $("#topping1Btn").click(function() {
    $("#topping1").show();
    $("#topping1Btn").hide();
    currentPizza.addTopping("Green Pepper");
  });
  $("#topping2Btn").click(function() {
    $("#topping2").show();
    $("#topping2Btn").hide();
    currentPizza.addTopping("Onion");
  });
  $("#topping3Btn").click(function() {
    $("#topping3").show();
    $("#topping3Btn").hide();
    currentPizza.addTopping("Mushroom");
  });
  $("#topping4Btn").click(function() {
    $("#topping4").show();
    $("#topping4Btn").hide();
    currentPizza.addTopping("Pineapple");
  });
  $("#topping5Btn").click(function() {
    $("#topping5").show();
    $("#topping5Btn").hide();
    currentPizza.addTopping("Extra Cheese");
  });
  $("#topping6Btn").click(function() {
    $("#topping6").show();
    $("#topping6Btn").hide();
    currentPizza.addTopping("Anchovies");
  });
  $("#topping7Btn").click(function() {
    $("#topping7").show();
    $("#topping7Btn").hide();
    currentPizza.addTopping("Pepperoni");
  });
  $("#topping8Btn").click(function() {
    $("#topping8").show();
    $("#topping8Btn").hide();
    currentPizza.addTopping("Bacon");
  });
  $("#topping9Btn").click(function() {
    $("#topping9").show();
    $("#topping9Btn").hide();
    currentPizza.addTopping("Sausage");
  });
});
