const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    catalog_id: {
        type: String,
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
    info: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: false,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Product', ProductSchema);
