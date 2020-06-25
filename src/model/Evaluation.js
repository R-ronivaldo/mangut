const mongoose = require("mongoose");

const EvaluationSchema = mongoose.Schema({
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
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Evaluation', EvaluationSchema);