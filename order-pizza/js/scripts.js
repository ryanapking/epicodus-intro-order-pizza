// Back end logic
function Pizza() {
  this.size = "Small";
  this.toppings = [];
  this.basePrice = 10;
  this.individualToppingPrice = 1;
  this.totalPizzaPrice = 10;
};
Pizza.prototype.setBasePrices = function() {
  if (this.size === "Small") {
    this.basePrice = 10;
    this.individualToppingPrice = 1;
  } else if (this.size === "Medium") {
    this.basePrice = 12;
    this.individualToppingPrice = 1.5;
  } else if (this.size === "Large") {
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
Pizza.prototype.removeTopping = function(topping) {
  var index = this.toppings.indexOf(topping);
  this.toppings.splice(index, 1);
  this.setTotalPizzaPrice();
};
Pizza.prototype.changeSize = function(newSize) {
  this.size = newSize;
  this.setBasePrices();
  this.setTotalPizzaPrice();
};

// User interface logic
$(document).ready(function() {
  var pizzaCart = [];
  var currentPizza = new Pizza();
  updatePriceDisplays();
  $("#sizeForm input[type=radio]").change(function() {
    currentPizza.changeSize($(this).val());
    updatePriceDisplays();
  });
  $("#addPizzaBtn").click(function() {
    pizzaCart.push(currentPizza);
    currentPizza = new Pizza();
    updatePriceDisplays();
    resetToppingDisplays();
    updateCartDisplay();
  });
  $("#startOverBtn").click(function() {
    currentPizza = new Pizza();
    updatePriceDisplays();
    resetToppingDisplays();
  });
  $("#topping1Btn").click(function() {
    $("#topping1").show();
    $("#topping1Btn").hide();
    currentPizza.addTopping("Green Pepper");
    updatePriceDisplays();
  });
  $("#topping2Btn").click(function() {
    $("#topping2").show();
    $("#topping2Btn").hide();
    currentPizza.addTopping("Onion");
    updatePriceDisplays();
  });
  $("#topping3Btn").click(function() {
    $("#topping3").show();
    $("#topping3Btn").hide();
    currentPizza.addTopping("Mushroom");
    updatePriceDisplays();
  });
  $("#topping4Btn").click(function() {
    $("#topping4").show();
    $("#topping4Btn").hide();
    currentPizza.addTopping("Pineapple");
    updatePriceDisplays();
  });
  $("#topping5Btn").click(function() {
    $("#topping5").show();
    $("#topping5Btn").hide();
    currentPizza.addTopping("Extra Cheese");
    updatePriceDisplays();
  });
  $("#topping6Btn").click(function() {
    $("#topping6").show();
    $("#topping6Btn").hide();
    currentPizza.addTopping("Anchovies");
    updatePriceDisplays();
  });
  $("#topping7Btn").click(function() {
    $("#topping7").show();
    $("#topping7Btn").hide();
    currentPizza.addTopping("Pepperoni");
    updatePriceDisplays();
  });
  $("#topping8Btn").click(function() {
    $("#topping8").show();
    $("#topping8Btn").hide();
    currentPizza.addTopping("Bacon");
    updatePriceDisplays();
  });
  $("#topping9Btn").click(function() {
    $("#topping9").show();
    $("#topping9Btn").hide();
    currentPizza.addTopping("Sausage");
    updatePriceDisplays();
  });
  $("#topping1").click(function() {
    $("#topping1").hide();
    $("#topping1Btn").show();
    currentPizza.removeTopping("Green Pepper");
    updatePriceDisplays();
  });
  $("#topping2").click(function() {
    $("#topping2").hide();
    $("#topping2Btn").show();
    currentPizza.removeTopping("Onion");
    updatePriceDisplays();
  });
  $("#topping3").click(function() {
    $("#topping3").hide();
    $("#topping3Btn").show();
    currentPizza.removeTopping("Mushroom");
    updatePriceDisplays();
  });
  $("#topping4").click(function() {
    $("#topping4").hide();
    $("#topping4Btn").show();
    currentPizza.removeTopping("Pineapple");
    updatePriceDisplays();
  });
  $("#topping5").click(function() {
    $("#topping5").hide();
    $("#topping5Btn").show();
    currentPizza.removeTopping("Extra Cheese");
    updatePriceDisplays();
  });
  $("#topping6").click(function() {
    $("#topping6").hide();
    $("#topping6Btn").show();
    currentPizza.removeTopping("Anchovies");
    updatePriceDisplays();
  });
  $("#topping7").click(function() {
    $("#topping7").hide();
    $("#topping7Btn").show();
    currentPizza.removeTopping("Pepperoni");
    updatePriceDisplays();
  });
  $("#topping8").click(function() {
    $("#topping8").hide();
    $("#topping8Btn").show();
    currentPizza.removeTopping("Bacon");
    updatePriceDisplays();
  });
  $("#topping9").click(function() {
    $("#topping9").hide();
    $("#topping9Btn").show();
    currentPizza.removeTopping("Sausage");
    updatePriceDisplays();
  });
  function updatePriceDisplays() {
    if (currentPizza.toppings.length === 0) {
      $("#noToppings").show();
    } else $("#noToppings").hide();
    $("#pizzaSize").text(currentPizza.size);
    $("#basePrice").text(currentPizza.basePrice.toFixed(2));
    $(".toppingPrice").text(currentPizza.individualToppingPrice.toFixed(2));
    $("#totalPrice").text(currentPizza.totalPizzaPrice.toFixed(2));
  };
  function updateCartDisplay() {
    var cartTotal = 0;
    if (pizzaCart.length !== 0) {
      $("#emptyCart").hide();
    } else {
      $("#emptyCart").show();
    }
    $("#cart").text("");
    pizzaCart.forEach(function(pizza, index) {
      $("#cart").append("<p class='right clickable'>" + pizza.size + " Pizza: $" + pizza.totalPizzaPrice.toFixed(2) + "</p>");
      $("#cart p").last().click(function() {
        $(".cartItem" + index).toggle();
      });
      $("#cart").append("<p class='right initiallyHidden cartItem" + index + "'>Toppings: </p>");
      if (pizza.toppings.length === 0) {
        $(".cartItem" + index).append("none");
      } else {
        pizza.toppings.forEach(function(topping, toppingIndex) {
          if (toppingIndex !== 0) {
            $(".cartItem" + index).append(", " + topping);
          } else {
            $(".cartItem" + index).append(topping);
          }
        })
      }
      cartTotal += pizza.totalPizzaPrice;
    });
    $("#cartTotal").text(cartTotal.toFixed(2));
  }
  function resetToppingDisplays() {
    $("#topping1").hide();
    $("#topping2").hide();
    $("#topping3").hide();
    $("#topping4").hide();
    $("#topping5").hide();
    $("#topping6").hide();
    $("#topping7").hide();
    $("#topping8").hide();
    $("#topping9").hide();
    $("#topping1Btn").show();
    $("#topping2Btn").show();
    $("#topping3Btn").show();
    $("#topping4Btn").show();
    $("#topping5Btn").show();
    $("#topping6Btn").show();
    $("#topping7Btn").show();
    $("#topping8Btn").show();
    $("#topping9Btn").show();
  };
});
