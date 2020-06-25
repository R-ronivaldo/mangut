const mongoose = require("mongoose");
const { removeByIdProduct } = require("./ControllerEvaluation");

const Product = mongoose.model("Product");

module.exports = {
    async insert(req, res){
        const produto = await Product.create(req.body);

        return res.json(produto);
    },

    async selectById(req,res){
        const produto = await Product.findById(req.params.id);

        return res.json(produto);
    },

    async update(req, res){
        const produto = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(produto);
    },

    async remove(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.status(200).send("Produto deletado com sucesso");
    },

    async selectByIdCatalog(req, res){
        const product = await Product.find({catalog_id: req.params.id});
        return res.json(product);
    },

    async removeByIdCatalog (req, res) {
        
         await Product.remove({catalog_id: req.params.id});
        
        return res.status(200).send("OK");
    }
}