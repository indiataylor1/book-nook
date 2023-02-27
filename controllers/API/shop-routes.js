const router = require('express').Router();
const { Shop } = require('../../models');
const { Author } = require('../..models');
const { Book } = require('../..models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBook = await Book.create({
            ...req.body,
            user_id: req.session.user_id,
            id: req.session.id,
            book_name: req.session.book_name,
            price: req.session.price,
            genre_id: req.session.genre_id,
            id: req.session.id,
            author_name: req.session.author_name
        });

        res.status(200).json(newBook);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const bookData = await Book.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!bookData) {
            res.status(404).json({ message: '404 Book ID not found' });
            return;
        }

        res.status(200).json(bookData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
