const { Schema } = require("mongoose");

const ModeloSchema = new Schema({
  modelo: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

module.exports = ModeloSchema;
