const mongoose = require("mongoose");

const Product = mongoose.model("Product");

const ControllerCatalog = require("./ControllerCatalog");

module.exports = {
    async insert(req, res){
        try {
            const product = await Product.create(req.body);

            const products = await Product.find({catalog: req.body.catalog});
            
            const catalog = await ControllerCatalog.addProductOnCatalog(req.body.catalog,products);

            return res.send({product});
        } catch (err) {
            return res.status(400).send({ error: 'Error creating product'});
        }
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
        const ControllerEvaluation = require("./ControllerEvaluation");
        const ControllerNotify = require("./ControllerNotify");       
        try {
            const idProduct = req.params.id;
            
            await ControllerEvaluation.removeByIdProductInternal(idProduct);

            await ControllerNotify.removeByIdProductInternal(idProduct);

            await Product.remove({_id: idProduct});
            
            return res.status(200).send("Product successfully deleted");
        } catch (err) {
            return res.status(400).send("Error deleting notification");
        }

    },

    async selectByIdCatalog(req, res){
        const product = await Product.find({catalog_id: req.params.id});
       
        return res.json(product);
    },

    async removeByIdCatalog (req, res) {

         await Product.remove({catalog_id: req.params.id});
        
        return res.status(200).send("OK");
    },

    //
    // FUNÇÕES INTERNAS
    //

    async addNotifyOnProduct(idProduct,notifies){

        const product = await Product.findById(idProduct);

        product.notifies = notifies;

        const productUdp = await Product.findByIdAndUpdate(idProduct,product, {new:true});

        return ({productUdp});
    },

    async addEvaluationOnProduct(idProduct,evaluations){
        const product = await Product.findById(idProduct);

        product.evaluations = evaluations;

        const productUdp = await Product.findByIdAndUpdate(idProduct,product, {new:true});

        return ({productUdp});
    },

    async removeByIdProductInternal(idProduct){ 
        const ControllerEvaluation = require("./ControllerEvaluation");
        const ControllerNotify = require("./ControllerNotify");       
        try {
            await ControllerEvaluation.removeByIdProductInternal(idProduct);

            await ControllerNotify.removeByIdProductInternal(idProduct);

            return await Product.remove({_id: idProduct});
        } catch (err) {
            return;
        }

    },
};