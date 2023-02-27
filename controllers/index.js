const express = require("express");

// const apiRoutes = require("./API");
const homeRoutes = require("./home-routes");

const Router = express.Router;
const router = Router();

// router.use("/api", () => {});
router.use("/", homeRoutes);

module.exports = router;
