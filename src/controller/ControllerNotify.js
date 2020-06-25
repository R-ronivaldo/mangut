const mongoose = require("mongoose");
const { selectById } = require("./ControllerProduct");
const { selectByIdProduto } = require("./ControllerEvaluation");

const Notify = mongoose.model('Notify');

module.exports = {
    async insert(req, res){
        const notify = await Notify.create(req.body);

        return res.json(notify);
    },

    async selectById(req,res){
        const notify = await Notify.findById(req.params.id);

        return res.json(notify);
    },

    async update(req, res){
        const notify = await Notify.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(notify);
    },

    async remove(req, res){
        await Notify.findByIdAndRemove(req.params.id);

        return res.status(200).send("Notificação cadastrado com sucesso");
    },

    async selectByIdProduct(req, res){
        const notify = await Notify.find({product_id: req.params.id});
        return res.json(notify);
    },

    async removeByIdProduct(req, res){
       
        await Notify.remove({product_id: req.params.id});

        return res.status(200).send("Notificações delatadas com sucesso");
    }
};