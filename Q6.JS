// 1. Create the expenses array
const expenses = [
    { note: "lunch", amount: 150, tag: "food" },
    { note: "taxi", amount: 90, tag: "transport" },
    { note: "dinner", amount: 220, tag: "food" },
    { note: "bus", amount: 30, tag: "transport" },
    { note: "movie", amount: 120, tag: "fun" }
];

// 2. Create a regular function to determine the expense level
function level(amount) {
    if (amount >= 200) {
        return "big";
    } else if (amount >= 100) {
        return "medium";
    } else {
        return "small";
    }
}

// 3. Create an arrow function using object destructuring
const format = ({ note, amount, tag }) => {
    return `${note.toUpperCase()} — ${amount} birr [${tag}] (${level(amount)})`;
};

// 4. Use map() to format each expense
const formattedExpenses = expenses.map(format);

// 5. Use for...of to print each formatted expense
for (const expense of formattedExpenses) {
    console.log(expense);
}

// 6. Use reduce() to calculate the grand total
const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
}, 0);

console.log(`Grand total: ${total} birr`);

// 7. Use filter() and reduce() to calculate food spending
const foodExpenses = expenses.filter(expense => expense.tag === "food");

const foodTotal = foodExpenses.reduce((sum, expense) => {
    return sum + expense.amount;
}, 0);

console.log(`Food spending: ${foodTotal} birr`);

// 8. Use reduce() to find the biggest expense
const biggestExpense = expenses.reduce((biggest, expense) => {
    if (expense.amount > biggest.amount) {
        return expense;
    } else {
        return biggest;
    }
});

console.log(
    `Biggest expense: ${biggestExpense.note} (${biggestExpense.lenght}`);