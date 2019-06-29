const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController");

// Matches with "/api/inventory"
router.route("/")
  .get(inventoryController.findAll)
  .post(inventoryController.create);

// Matches with "/api/inventory/:item_id"
router.route("/:item_id")
  .delete(inventoryController.remove);

module.exports = router;
