const seedGenres = require('./genre-seeds');
const seedBooks = require('./books-seeds');
const seedAuthors = require('./authors-seeds');
const seedBookAuthors = require('./book-author-seeds');

const sequelize = require('../config/connection');
const seedBooks = require('./books-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedGenres();
    console.log('\n----- GENRES SEEDED -----\n');

    await seedBooks();
    console.log('\n----- BOOKS SEEDED -----\n');

    await seedAuthors();
    console.log('\n----- AUTHORS SEEDED -----\n');

    await seedBookAuthors();
    console.log('\n----- BOOK AUTHOR SEEDED -----\n');

    process.exit(0);
};

seedAll();