const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pizza = document.getElementById("pizza").value;
  const addons = document.getElementById("addons").value;

  if (!name || !phone || !pizza) {
    alert("Please fill out all required fields.");
    return;
  }

  // Pizza price
  let pizzaPrice = 0;
  switch (pizza) {
    case "BBQ": pizzaPrice = 10; break;
    case "Margherita": pizzaPrice = 9; break;
    case "Veggie": pizzaPrice = 11; break;
    case "Cheese": pizzaPrice = 13; break;
    case "Pepperoni": pizzaPrice = 13; break;
    case "Neapolitan": pizzaPrice = 14; break;
    case "Mushrooms": pizzaPrice = 8; break;
    case "Hawaiian": pizzaPrice = 15; break;
  }

  // Add-on price
  let addonPrice = 0;
  switch (addons) {
    case "Coke": addonPrice = 5; break;
    case "Sprite": addonPrice = 3.99; break;
    case "Royal": addonPrice = 4.99; break;
    case "Mountain": addonPrice = 4; break;
    case "Pepsi": addonPrice = 3.99; break;
    case "7up": addonPrice = 3.99; break;
    case "Pepper": addonPrice = 5.99; break;
  }

  const total = pizzaPrice + addonPrice;
  const prepTime = Math.floor(Math.random() * 20) + 15;

  const message = `
    Thank you, ${name}!\n
    Your order total is $${total.toFixed(2)}.\n
    Estimated delivery/pickup time: ${prepTime} minutes.\n\n
    Do you confirm your order?
  `;

  const confirmed = confirm(message);
  if (confirmed) {
    alert("Your order has been placed!");
    orderForm.reset();
  } else {
    alert("Order cancelled.");
  }
});



