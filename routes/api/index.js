const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const recipesRoutes = require("./recipes");

// API routes
router.use("/inventory", inventoryRoutes);
router.use("/recipes", recipesRoutes);

module.exports = router;
