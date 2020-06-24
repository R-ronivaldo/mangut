const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: false,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Produto', ProdutoSchema);
