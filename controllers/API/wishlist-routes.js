const router = require('express').Router();
const { wishlist } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    wishlist.findAll({})
        .then(wishlistData => res.json(wishlisttData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
    if (!wishlistData) {
        res.status(404).json({ message: '404 wishlist not found' });
        return;
    }

    res.status(200).json(wishlistData);

});


module.exports = router;