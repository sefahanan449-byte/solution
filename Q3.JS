// 1. Create the menu array
const menu = [
    { dish: "doro wat", price: 180, spicy: true },
    { dish: "pasta", price: 120, spicy: false },
    { dish: "kitfo", price: 200, spicy: true },
    { dish: "salad", price: 90, spicy: false }
];

// 2. Regular function to return spicy or mild
function spicyLabel(spicy) {
    if (spicy === true) {
        return "🌶 spicy";
    } else {
        return "mild";
    }z
}

// 3. Arrow function using object destructuring
const formatDish = ({ dish, price, spicy }) => {
    return `${dish.toUpperCase()} — ${price} birr — ${spicyLabel(spicy)};
}`;
};
// 4. Use map() to format every dish
const formattedMenu = menu.map(formatDish);

// Print each formatted dish using for...of
for (const line of formattedMenu) {
    console.log(line);
}

// 5. Use filter() to count spicy dishes
const spicyDishes = menu.filter(dish => dish.spicy === true);

console.log("Number of spicy dishes:", spicyDishes.length);

// 6. Use reduce() to calculate the total price
let total = menu.reduce((total, dish) => {
    return total + dish.price;
}, 0);

console.log("Total price:", total, "birr");

// 7. Check whether the total is above 500
if (total > 500) {
    console.log("This is a feast!");
} else {
    console.log("A reasonable meal.");
}

// 8. Use spread operator to add a new dish
const fullMenu = [
    ...menu,
    { dish: "tibs", price: 190, spicy: true }
];

console.log("New number of dishes:", 
    fullMenu.length);