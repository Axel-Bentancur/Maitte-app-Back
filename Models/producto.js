const { Schema, model } = require("mongoose");
const ModeloSchema = require("./modelos");

const ProductoSchema = new Schema({
  producto: {
    type: String,
    required: true,
  },
  modelos: [ModeloSchema],
});

module.exports = model("ProductoModel", ProductoSchema);
