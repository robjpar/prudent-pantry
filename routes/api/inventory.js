const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController");

// Matches with "/api/inventory/:user_id"
router.route("/:user_id")
  .get(inventoryController.findAll)

// Matches with "/api/inventory"
router.route("/")
  .post(inventoryController.create);

// Matches with "/api/inventory/:item_id"
router.route("/:item_id")
  .delete(inventoryController.remove);

module.exports = router;
