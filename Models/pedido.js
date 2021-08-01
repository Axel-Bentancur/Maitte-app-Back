const { Schema, model } = require("mongoose");

const PedidoSchema = new Schema(
  {
    numeroPedido: {
      type: String,
      required: true,
    },
    cliente: {
      type: String,
      required: true,
    },
    pedido: {
      type: Array,
      required: true,
    },
    estado: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("PedidoModel", PedidoSchema);
