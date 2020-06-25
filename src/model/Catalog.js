const mongoose = require("mongoose");

const CatalogSchema = mongoose.Schema({
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Catalog', CatalogSchema);