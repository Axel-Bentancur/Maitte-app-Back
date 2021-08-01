const pedidosCtrl = {};
const PedidoModel = require("../Models/pedido");

pedidosCtrl.getPedidos = async (req, res) => {
  try {
    const pedidos = await PedidoModel.find();
    res.json(pedidos);
  } catch (error) {
    console.log(error);
  }
};

pedidosCtrl.createPedido = async (req, res) => {
  try {
    const { numeroPedido, cliente, pedido, estado } = req.body;
    const newPedido = new PedidoModel({
      numeroPedido,
      cliente,
      pedido,
      estado,
    });
    await newPedido.save();
    res.json({ message: "Pedido creado satisfactoriamente" });
  } catch (error) {
    res.json({ message: "Error al Crear el pedido" });
    console.log(error);
  }
};

pedidosCtrl.getPedido = async (req, res) => {
  try {
    const pedido = await PedidoModel.findById(req.params.id);
    res.json(pedido);
  } catch (error) {
    res.json({ message: "Error al obtener el pedido" });
    console.log(error);
  }
};

// Actualizar
pedidosCtrl.updatePedido = async (req, res) => {
  /* try {
    const {
      numeroPedido,
      cliente,
      producto,
      modelo,
      cantidad,
      estado,
      precio,
    } = req.body;
    await PedidoModel.findByIdAndUpdate(req.params.id, {
      numeroPedido,
      cliente,
      producto,
      modelo,
      cantidad,
      estado,
      precio,
    });
    res.json({ message: "Pedido actualizado satisfactoriamente" });
  } catch (error) {
    res.json({ message: "Error al Actualizar el pedido" });
    console.log(error);
  } */
};

pedidosCtrl.deletePedido = async (req, res) => {
  try {
    await PedidoModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Pedido Eliminado satisfactoriamente" });
  } catch (error) {
    res.json({ message: "Error al eliminar el Pedido" });
    console.log(error);
  }
};

module.exports = pedidosCtrl;
