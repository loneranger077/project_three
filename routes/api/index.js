const router = require("express").Router();
const soundRoutes = require("./sounds");
const trackRoutes = require("./tracks");
const userRoutes = require("./users");

// routes
router.use("/users", userRoutes);
router.use("/sounds", soundRoutes);
router.use("/tracks", trackRoutes);

module.exports = router;
