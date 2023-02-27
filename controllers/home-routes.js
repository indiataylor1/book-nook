const express = require("express");

const Router = express.Router;
const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).render("homepage");
  } catch (error) {
    res.status(500).json({ message: "Oops, somthing went wrong" });
  }
});

router.get("/test", (req, res) => {
  try {
    res.status(200).render("wishlist");
  } catch (error) {
    res.status(500).json({ message: "Oops, somthing went wrong" });
  }
});

module.exports = router;
