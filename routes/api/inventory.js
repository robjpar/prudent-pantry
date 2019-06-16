const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController");

// Matches with "/api/foods"
router.route("/")
  .get(inventoryController.findAll)
  .post(inventoryController.create);

// Matches with "/api/foodss/:id"
router
  .route("/:id")
  .delete(inventoryController.remove);

module.exports = router;
