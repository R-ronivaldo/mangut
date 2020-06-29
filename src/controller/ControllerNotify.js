const mongoose = require("mongoose");

const Notify = mongoose.model('Notify');

const ControllerProduct = require("./ControllerProduct");

module.exports = {
    async insert(req, res){
        try {
            const notify = await Notify.create(req.body);

            const idProduct = req.body.product;

            const notifies = await Notify.find({product: idProduct});
            
            const product = await ControllerProduct.addNotifyOnProduct(idProduct,notifies);

           
            return res.send({notify});
        } catch (err) {
            return res.status(400).send({ error: 'Error creating notify'});
        }
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

        return res.status(200).send("Notification successfully deleted");
    },

    async selectByIdProduct(req, res){
        const notify = await Notify.find({product: req.params.id});

        return res.json(notify);
    },

    async removeByIdProduct(req, res){
       
        await Notify.remove({product: req.params.id});

        return res.status(200).send("Notifications successfully reported");
    },

    //
    // FUNÇÕES INTERNAS
    //

    async removeByIdProductInternal(idProduct){
        return await Notify.remove({product: idProduct});
    }
};