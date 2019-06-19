const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: { type: String, required: true },
  expireDate: { type: Date, default: Date.now },
  qty: Schema.Types.Decimal128,
  unit: String,
  storePlace:[
    {type: Schema.Types.ObjectId, ref: 'Storages'}
  ],
  userId:[
    {type: Schema.Types.ObjectId, ref: 'Users'}
  ],
  dateIn: { type: Date, default: Date.now }
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;