const router = require('express').Router();
const { Genre, Author, Book, BookAuthor } = require('../../models');

// The `/api/books` endpoint

// get all books
router.get('/', (req, res) => {
    Book.findAll({
        include: [
            {
                model: Genre,
                attributes: ["genre_name"],
            },
            { model: Author, attributes: ["author_name"] },
        ],
    })
        .then((dbBookData) => res.json(dbBookData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one book
router.get('/:id', (req, res) => {
    Book.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Genre,
                attributes: ["genre_name"],
            },
            { model: Author, attributes: ["autor_name"] },
        ],
    })
        .then((dbBookData) => {
            if (!dbBookData) {
                res.status(404).json({ message: "No Book found with this id" });
                return;
            }
            res.json(dbBookData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create new book
router.post('/', (req, res) => {
    Book.create({
        book_name: req.body.book_name,
        price: req.body.price,
        authorIds: req.body.authorIds,
    })
        .then((book) => {
            if (req.body.authorIds.length) {
                const bookAuthorIdArr = req.body.authorIds.map((author_id) => {
                    return {
                        book_id: book.id,
                        author_id,
                    };
                });
                return BookAuthor.bulkCreate(bookAuthorIdArr);
            }
            res.status(200).json(book);
        })
        .then((bookAuthorIds) => res.status(200).json(bookAuthorIds))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// update book
router.put('/:id', (req, res) => {
    // update book data
    Book.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((book) => {
            return BookAuthor.findAll({ where: { book_id: req.params.id } });
        })
        .then((bookAuthors) => {
            const bookAuthorIds = bookAuthors.map(({ author_id }) => author_id);
            const newBookAuthors = req.body.authorIds
                .filter((author_id) => !bookAuthorIds.includes(author_id))
                .map((author_id) => {
                    return {
                        book_id: req.params.id,
                        author_id,
                    };
                });
            const bookAuthorsToRemove = bookAuthors
                .filter(({ author_id }) => !req.body.authorIds.includes(author_id))
                .map(({ id }) => id);

            return Promise.all([
                BookAuthor.destroy({ where: { id: bookAuthorsToRemove } }),
                bookAuthors.bulkCreate(newBookAuthors),
            ]);
        })
        .then((updatedBookAuthors) => res.json(updatedBookAuthors))
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbBookData) => {
            if (!dbBookData) {
                res.status(404).json({ message: "No Book found with this id" });
                return;
            }
            res.json(dbBookData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
