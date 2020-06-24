const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = mongoose.model("User");

module.exports = {
    async insert(req, res){
        const usuario = await User.create(req.body);

        return res.json(usuario);
    },

    async select(req, res){
        const usuario = await User.findById(req.params.id);

        return res.json(usuario);
    },

    async update(req, res) {
        const usuario = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(usuario);
    },

    async remove(req, res) {
        await User.findByIdAndRemove(req.params.id);

        return res.status(200).send("Usuário deletado com sucesso!");
    },
    async acess(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user)
        return res.status(400).send({ error: 'User not found' });

        if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'User invalid' });

        user.password = undefined;

        res.send({ user });
    },
};