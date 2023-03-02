const router = require('express').Router();
const { Genre, Book } = require('../../models');

// The `/api/genres` endpoint

router.get('/', (req, res) => {
    Genre.findAll({
        include: [
            {
                model: Book,
                attributes: ["id", "book_name", "price"],
            },
        ],
    })
        .then((dbGenreData) => res.json(dbGenreData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Genre.findOne({
        where: {
            id: req.params.id,
        },
    })
        .then((dbGenreData) => {
            if (!dbGenreData) {
                res.status(404).json({ message: "No genre found with this id" });
                return;
            }
            res.json(dbGenreData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Genre.create({ genre_name: req.body.genre_name })
        .then((dbGenreData) => res.json(dbGenreData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Genre.update(
        { genre_name: req.body.genre_name },
        { where: { id: req.params.id } }
    )
        .then((dbGenreData) => {
            if (!dbGenreData) {
                res.status(404).json({ message: "No Genre found with this id" });
                return;
            }
            res.json(dbGenreData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Genre.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbGenreData) => {
            if (!dbGenreData) {
                res.status(404).json({ message: "No Genre found with this id" });
                return;
            }
            res.json(dbGenreData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
