const clientesCtrl = {};
const ClienteModel = require("../Models/cliente");

clientesCtrl.getClientes = async (req, res) => {
  try {
    const clientes = await ClienteModel.find();
    res.json(clientes);
  } catch (error) {
    console.log(error);
  }
};

clientesCtrl.createCliente = async (req, res) => {
  try {
    const { clienteNombre } = req.body;
    const validacion = await ClienteModel.findOne({ clienteNombre });
    if (validacion) {
      throw new Error("El Cliente que intenta agregar ya existe");
    } else {
      const nuevoCliente = new ClienteModel({ clienteNombre });
      await nuevoCliente.save();
      res.json({ message: "El Cliente ha sido creado" });
    }
  } catch (error) {
    res.json({ message: "El Cliente que intenta agregar ya existe" });
    console.log(error);
  }
};

clientesCtrl.getCliente = async (req, res) => {
  try {
    const cliente = await ClienteModel.findById(req.params.id);
    res.json(cliente);
  } catch (error) {
    res.json({ message: "Error al obtener el Cliente" });
    console.log(error, "Error al obtener el Producto");
  }
};

clientesCtrl.updateCliente = async (req, res) => {
  const { clienteNombre } = req.body;
  await ClienteModel.findByIdAndUpdate(req.params.id, {
    clienteNombre,
  });
  res.json({ message: "cliente actualizado" });

  /* try {
    const { clienteNombre } = req.body;
    await ClienteModel.findByIdAndUpdate(req.params.id, {
      clienteNombre,
    });
    res.json({ message: "Cliente actualizado satisfactoriamente" });
  } catch (error) {
    res.json({ message: "Error al actualizar el Cliente" });
    console.log(error);
  } */
};

clientesCtrl.deleteCliente = async (req, res) => {
  try {
    await ClienteModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Cliente Eliminado satisfactoriamente" });
  } catch (error) {
    res.json({ message: "Error al eliminar el Cliente" });
    console.log(error);
  }
};

module.exports = clientesCtrl;
