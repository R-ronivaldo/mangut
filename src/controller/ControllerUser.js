const mongoose = require("mongoose");

const Usuario = mongoose.model("User");

module.exports = {
    async insert(req, res){
        const usuario = await Usuario.create(req.body);

        return res.json(usuario);
    },

    async select(req, res){
        const usuario = await Usuario.findById(req.params.id);

        return res.json(usuario);
    },

    async update(req, res) {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(usuario);
    },

    async remove(req, res) {
        await Usuario.findByIdAndRemove(req.params.id);

        return res.status(200).send("Usuário deletado com sucesso!");
    },
};