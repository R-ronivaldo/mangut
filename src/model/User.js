const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    secondName: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    photo: {
        type: String
    },
    profile: {
        type: String,
        required: true,
    },
    catalogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Catalog'
    }],
    createAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save',async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

mongoose.model('User', UserSchema );