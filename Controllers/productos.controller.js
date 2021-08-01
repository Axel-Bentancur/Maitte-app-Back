const productosCtrl = {};
const ProductoModel = require("../Models/producto");

productosCtrl.getProductos = async (req, res) => {
  try {
    const productos = await ProductoModel.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
  }
};

productosCtrl.createProducto = async (req, res) => {
  try {
    const { producto, modelo, precio } = req.body;
    const validacion = await ProductoModel.findOne({ producto: producto });
    if (validacion) {
      throw new Error("El Producto que intenta agregar ya existe  || Backend");
    } else {
      const data = {
        producto: producto,
        modelos: [{ modelo, precio }],
      };
      const newProducto = new ProductoModel(data);
      await newProducto.save();
      res.json({ message: "El Producto ha sido creado" });
    }
  } catch (error) {
    res.json({
      message: "El Producto que intenta agregar ya existe  || Backend",
    });
    console.log(error);
  }
};

productosCtrl.getProducto = async (req, res) => {
  try {
    const producto = await ProductoModel.findById(req.params.id);
    res.json(producto);
  } catch (error) {
    res.json({ message: "Error al obtener el Producto || Backend" });
    console.log(error, "Error al obtener el Producto || Backend");
  }
};

productosCtrl.updateProducto = async (req, res) => {
  try {
    const { modelo, precio, modelo_id } = req.body;
    const NewModel = { modelo, precio };
    await ProductoModel.updateOne(
      {
        _id: req.params.id,
        "modelos._id": modelo_id,
      },
      { $set: { "modelos.$": NewModel } }
    );
    res.json({ message: "Modelo actualizado satisfactoriamente" });
  } catch (error) {
    res.json({ message: "Error al Actualizar el Modelo  || Backend" });
    console.log(error);
  }
};

productosCtrl.addModelo = async (req, res) => {
  try {
    const { modelo, precio } = req.body;
    await ProductoModel.findByIdAndUpdate(req.params.id, {
      $push: { modelos: [{ modelo, precio }] },
    });
    res.json({ message: "Modelo agregado satisfactoriamente" });
  } catch (error) {
    res.json({ message: "Error al Agregar el Modelo  || Backend" });
    console.log(error);
  }
};

productosCtrl.deleteModelo = async (req, res) => {
  try {
    const { modelo_id } = req.body;
    await ProductoModel.findByIdAndUpdate(req.params.id, {
      $pull: { modelos: { _id: modelo_id } },
    });
    res.json({ message: "Modelo eliminado satisfactoriamente" });
  } catch (error) {
    res.json({ message: "Error al eliminar el Modelo  || Backend" });
    console.log(error);
  }
};

productosCtrl.deleteProducto = async (req, res) => {
  try {
    await ProductoModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Producto eliminado satisfactoriamente" });
  } catch (error) {
    res.json({ message: "Error al eliminar el Producto  || Backend" });
    console.log(error);
  }
};

module.exports = productosCtrl;
