const {Schema, model} = require('mongoose');

const ClienteSchema = new Schema({
    clienteNombre : {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = model('ClienteModel', ClienteSchema);