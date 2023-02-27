const { Book } = require('../models');

const bookData = [
    {
        book_name: 'The Silent Patient',
        price: 14.99,
        genre_id: 5,
    },
    {
        book_name: 'The Likeness',
        price: 90.0,
        genre_id: 1,
    },
    {
        book_name: 'Into Thin Air',
        price: 22.99,
        genre_id: 7,
    },
    {
        book_name: 'Outlander',
        price: 12.99,
        genre_id: 4,
    },
    {
        book_name: 'It Ends with Us',
        price: 29.99,
        genre_id: 6,
    },
    {
        book_name: 'Lessons in Chemsitry',
        price: 29.99,
        genre_id: 6,
    },
    {
        book_name: 'Becoming',
        price: 29.99,
        genre_id: 2,
    },
    {
        book_name: 'Dracula',
        price: 29.99,
        genre_id: 3,
    },
    {
        book_name: 'Spare',
        price: 29.99,
        genre_id: 2,
    },
    {
        book_name: 'The Girl Upstairs',
        price: 29.99,
        genre_id: 1,
    },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;