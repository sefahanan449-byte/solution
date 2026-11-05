// 1. Create an array of country objects
const countries = [
    { name: "ethiopia", millions: 126, continent: "africa" },
    { name: "kenya", millions: 54, continent: "africa" },
    { name: "japan", millions: 125, continent: "asia" },
    { name: "france", millions: 68, continent: "europe" },
    { name: "egypt", millions: 111, continent: "africa" }
];

// 2. Create an arrow function using object destructuring
const format = (country, position) => {
    const { name, millions, continent } = country;

    return `${position}. ${name.toUpperCase()} — ${millions}M (${continent})`;
};

// 3. Print each country using forEach() and its index
countries.forEach((country, i) => {
    console.log(format(country, i + 1));
});

// 4. Find the biggest and smallest populations
const populations = countries.map(country => country.millions);

console.log(`Biggest: ${Math.max(...populations)}M, Smallest: ${Math.min(...populations)}M`);

// 5. Filter African countries
const africanCountries = countries.filter(country => country.continent === "africa");

// 6. Calculate the total population of African countries
const africanTotal = africanCountries.reduce((total, country) => {
    return total + country.millions;
}, 0);

console.log(`African countries: ${africanCountries.length}, total ${africanTotal}M`);

// 7. Check if any country is in Asia
const hasAsianCountry = countries.some(country => country.continent === "asia");

console.log(hasAsianCountry);

// 8. Calculate the average population
const totalPopulation = countries.reduce((total, country) => {
    return total + country.millions;
}, 0);

const averagePopulation = Math.round(totalPopulation / countries.length);

console.log(`Average population: ${averagePopulation}M`);