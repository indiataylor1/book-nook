const { Author } = require('../models');

const authorData = [
    {
        author_name: 'Alex Michaelides',
    },
    {
        author_name: 'Jon Krakauer',
    },
    {
        author_name: 'Tana French',
    },
    {
        author_name: 'Michelle Obama',
    },
    {
        author_name: 'Bram Stoker',
    },
    {
        author_name: 'Prince Harry, Duke of Sussex',
    },
    {
        author_name: 'Colleen Hoover',
    },
    {
        author_name: 'Diana Gabaldon',
    },
    {
        author_name: 'Bonnie Garmus',
    },
    {
        author_name: 'Georgina Lees',
    },
];

const seedAuthors = () => Author.bulkCreate(authorData);

module.exports = seedAuthors;