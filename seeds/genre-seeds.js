const { Genre } = require('../models');

const genreData = [
    {
        genre_name: 'Mystery',
    },
    {
        genre_name: 'Memoir',
    },
    {
        genre_name: 'Horror',
    },
    {
        genre_name: 'Romance',
    },
    {
        genre_name: 'Thriller',
    },
    {
        genre_name: 'Fiction',
    },
    {
        genre_name: 'Non-Fiction',
    },
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;

