const mongoose = require("mongoose");

const Evaluation = mongoose.model('Evaluation');

module.exports = {
    async insert(req, res){
        const evaluation = await Evaluation.create(req.body);

        return res.json(evaluation);
    },

    async selectById(req,res){
        const evaluation = await Evaluation.findById(req.params.id);

        return res.json(evaluation);
    },

    async update(req, res){
        const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(evaluation);
    },

    async remove(req, res){
        await Evaluation.findByIdAndRemove(req.params.id);

        return res.status(200).send("Avaliação cadastrado com sucesso");
    },

    async selectByIdProduto(req, res){
        const evaluation = await Evaluation.find({product_id: req.params.id});
        return res.json(evaluation);
    }
};