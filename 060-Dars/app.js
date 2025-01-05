const movies = [{
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        quality: "4D"
    },
    {
        title: "The Matrix",
        year: 1999,
        director: "The Wachowskis",
        quality: "3D"
    },
    {
        title: "Interstellar",
        year: 2014,
        director: "Christopher Nolan",
        quality: "8D"
    }
];

const FilterMovie = movies.filter((movie) => {
    if (movie.quality.includes("8D")) {
        return movie
    }
})

const filters = document.querySelector("h1");
if (FilterMovie.length > 0) {
    filters.textContent = FilterMovie[0].quality;
} else {
    filters.textContent = "No movie found with the specified quality.";
}
