const router = require('express').Router();
const { Author, Book, BookAuthor } = require('../../models');


router.get('/', (req, res) => {
    Author.findAll({
        include: [
            {
                model: Book,
                through: BookAuthor,
            },
        ],
    })
        .then((dbAuthorData) => res.json(dbAuthorData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Author.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Book,
                attributes: ["id", "book_name", "price"],
            },
        ],
    })
        .then((dbAuthorData) => {
            if (!dbAuthorData) {
                res.status(404).json({ message: "No Author found with this id" });
                return;
            }
            res.json(dbAuthorData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Author.create({ author_name: req.body.author_name })
        .then((dbAuthorData) => res.json(dbAuthorData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Author.update({ author_name: req.body.author_name }, { where: { id: req.params.id } })
        .then((dbAuthorData) => {
            if (!dbAuthorData) {
                res.status(404).json({ message: "No Author found with this id" });
                return;
            }
            res.json(dbAuthorData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Author.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbAuthorData) => {
            if (!dbAuthorData) {
                res.status(404).json({ message: "No Author found with this id" });
                return;
            }
            res.json(dbAuthorData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
