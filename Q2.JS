// 1. Create an array of movies
const movies = [
    { title: "inception", rating: 9, minutes: 148 },
    { title: "cars", rating: 7, minutes: 117 },
    { title: "titanic", rating: 8, minutes: 195 },
    { title: "shrek", rating: 6, minutes: 90 }
];

// 2. Create a regular function to give a verdict
function verdict(rating) {
    if (rating >= 8) {
        return "Must watch";
    } else if (rating >= 7) {
        return "Good";
    } else {
        return "Skip";
    }
}

// 3. Create an arrow function using object destructuring
const formatMovie = ({ title, rating }) => {
    return `${title.toUpperCase()} — ${rating}/10 — ${verdict(rating)}`;
};

// 4. Use map() to format every movie
const formattedMovies = movies.map(formatMovie);

// 5. Use for...of to print each formatted movie
for (const movie of formattedMovies) {
    console.log(movie);
}

// 6. Use filter() to find movies shorter than 120 minutes
const shortMovies = movies.filter(movie => movie.minutes < 120);

console.log("Number of short movies:", shortMovies.length);

// 7. Use reduce() to calculate the total minutes
let totalMinutes = movies.reduce((total, movie) => {
    return total + movie.minutes;
}, 0);

console.log("Total movie minutes:", totalMinutes);

// 8. Use the spread operator to create a new watchlist
const watchlist = [
    ...movies,
    { title: "coco", rating: 8, minutes: 105 }
];

console.log("New watchlist size:", watchlist.length);