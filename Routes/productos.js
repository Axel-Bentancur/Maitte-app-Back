const { Router } = require("express");
const router = Router();

const {
  getProductos,
  createProducto,
  getProducto,
  updateProducto,
  deleteModelo,
  deleteProducto,
  addModelo,
} = require("../Controllers/productos.controller");

router.route("/").get(getProductos).post(createProducto);

router
  .route("/:id")
  .get(getProducto)
  .put(updateProducto)
  .delete(deleteProducto);

router.route("/modelo/:id").put(deleteModelo);

router.route("/addmodelo/:id").put(addModelo);

module.exports = router;
