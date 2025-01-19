// Menu Data
let menu = {
    meals: {
        burger: 10.00,
        pizza: 12.50,
        pasta: 8.00,
        salad: 7.50,
        steak: 15.00,
        sushi: 18.00,
        burrito: 9.00,
        lasagna: 13.00,
        grilled_chicken: 11.00,
        fish_and_chips: 12.00,
        veggie_burger: 11.50,
        kebab: 14.00
    },
    drinks: {
        water: 1.00,
        sprite: 5.00,
        juice: 3.50,
        cola: 2.50,
        iced_tea: 3.00,
        lemonade: 4.00,
        coffee: 2.00,
        hot_chocolate: 3.00,
        beer: 6.00,
        wine: 7.00,
        mojito: 8.00,
        milkshake: 5.50
    },
};



alert("Welcome to the Restaurant Ordering System!");

console.log(
    `--- Menu ---
  Meals:
  Burger - $10.00
  Pizza - $12.50
  Pasta - $8.00
  Salad - $7.50
  Steak - $15.00
  Sushi - $18.00
  Burrito - $9.00
  Lasagna - $13.00
  Grilled Chicken - $11.00
  Fish and Chips - $12.00
  Veggie Burger - $11.50
  Kebab - $14.00
  
  Drinks:
  Water - $1.00
  Sprite - $5.00
  Juice - $3.50
  Cola - $2.50
  Iced Tea - $3.00
  Lemonade - $4.00
  Coffee - $2.00
  Hot Chocolate - $3.00
  Beer - $6.00
  Wine - $7.00
  Mojito - $8.00
  Milkshake - $5.50
  --------------------
  Type 0 to exit the programm
  `
);



let orderIsOn = true;
let totalMeal = 0;
let totalDrink = 0;

while (orderIsOn) {
    // Meal Selection
    let userInputMeal = prompt("Enter the name of the meal you'd like to order: ").toLowerCase();
    if (userInputMeal == 0) {
        break
    }
    if (menu.meals[userInputMeal] !== undefined) {
        let mealPrice = menu.meals[userInputMeal];
        alert(`Your order successfully added: \n1 ${userInputMeal} --- $${mealPrice.toFixed(2)}`);
        totalMeal += mealPrice;
    } else {
        alert("Meal not found. Please choose from the menu in the console.");
        continue; // Restarting the if loop
    }

    // Drink Selection
    let userInputDrink = prompt("Enter the name of the drink you'd like to order: ").toLowerCase();
    if (userInputDrink == 0) {
        break
    }
    if (menu.drinks[userInputDrink] !== undefined) {
        let drinkPrice = menu.drinks[userInputDrink];
        alert(`Your order successfully added: \n1 ${userInputDrink} --- $${drinkPrice.toFixed(2)}`);
        totalDrink += drinkPrice;
    } else {
        alert("Drink not found. Please choose from the menu in the console.");
        continue; // Restarting the if loop
    }

    // Display Total
    alert(`--- Order Summary ---
  Meals Total: $${totalMeal.toFixed(2)}
  Drinks Total: $${totalDrink.toFixed(2)}
  Grand Total: $${(totalMeal + totalDrink).toFixed(2)}`);

    // Continue Ordering?
    let continueOrNot = prompt("Do you want to place another order? (yes/no)").toLowerCase();
    if (continueOrNot === "no") {
        orderIsOn = false;
        alert(`Thank you for your order! Your final total is: $${(totalMeal + totalDrink).toFixed(2)}`);
    }
}
