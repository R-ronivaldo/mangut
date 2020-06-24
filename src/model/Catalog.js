const mongoose = require("mongoose");

const CatalogSchema = mongoose.Schema({
    profile_id: {
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
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Catalog', CatalogSchema);