const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
    catalog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Catalog',
        required: true,
    },
    notifies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notify'
    }],
    evaluations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Evaluation'
    }],
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Product', ProductSchema);
