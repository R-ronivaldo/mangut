const mongoose = require("mongoose");

const EvaluationSchema = mongoose.Schema({
    product_id: {
        type: String,
        required: true,
    },
    evaluatorProfile_id: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
    },
    coment: {
        type: String,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Evaluation', EvaluationSchema);