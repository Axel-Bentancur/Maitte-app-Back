const { Router } = require('express');
const router = Router();

const {getClientes, createCliente, getCliente, updateCliente, deleteCliente} = require('../Controllers/clientes.controller');

router.route('/')
    .get(getClientes)
    .post(createCliente)

router.route('/:id')
    .get(getCliente)
    .put(updateCliente)
    .delete(deleteCliente)

module.exports = router;