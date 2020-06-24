const mongoose = require("mongoose");

const NotifySchema = mongoose.Schema({
    actionProfile_id: {
        type: String,
        required: true,
    },
    affectedProfile_id: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Notify', NotifySchema);