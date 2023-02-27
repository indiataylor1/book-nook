const Book = require('./Book');
const Genre = require('./Genre');
const Author = require('./Author');
const BookAuthor = require('./BookAuthor');
Book.belongsTo(Genre, {
    foreignKey: "genre_id",
});

Genre.hasMany(Book, {
    foreignKey: "genre_id",
});

Book.belongsToMany(Author, {
    through: BookAuthor,
    foreignKey: "book_id",
});

Author.belongsToMany(Book, {
    through: BookAuthor,
    foreignKey: "author_id",
});

module.exports = {
    Book,
    Genre,
    Author,
    BookAuthor,
};
