const mongoose = require("mongoose");

const Produto = mongoose.model("Produto");

module.exports = {
    async insert(req, res){
        const produto = await Produto.create(req.body);

        return res.json(produto);
    },

    async select(req,res){
        const produto = await Produto.findById(req.params.id);

        return res.json(produto);
    },

    async update(req, res){
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(produto);
    },

    async remove(req, res){
        await Produto.findByIdAndRemove(req.params.id);

        return res.send("Produto deletado com sucesso");

    }
};