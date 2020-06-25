const mongoose = require("mongoose");

const Evaluation = mongoose.model('Evaluation');
const ControllerProduct = require("./ControllerProduct");

module.exports = {
    async insert(req, res){
        try {
            
            const evaluation = await Evaluation.create(req.body);
            
            const evaluations = await Evaluation.find({product: req.body.product});

            const product = await ControllerProduct.addEvaluationOnProduct(req.body.product,evaluations);

            return res.send({product});
        } catch (err) {
            return res.status(400).send({ error: 'Error creating evaluation'});
        }
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

    async selectByIdProduct(req, res){
        const evaluation = await Evaluation.find({product_id: req.params.id});
        return res.json(evaluation);
    },

    async removeByIdProduct(req, res) {

        await Evaluation.remove({product_id: req.params.id});

        return res.status(200).send("Avaliação deletada com sucesso");
    }
};