const mongoose = require("mongoose");

const Catalog = mongoose.model('Catalog');

module.exports = {
    async insert(req, res){
        const catalog = await Catalog.create(req.body);

        return res.json(catalog);
    },

    async select(req,res){
        const catalog = await Catalog.findById(req.params.id);

        return res.json(catalog);
    },

    async update(req, res){
        const catalog = await Catalog.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(catalog);
    },

    async remove(req, res){
        await Catalog.findByIdAndRemove(req.params.id);

        return res.status(200).send("Catalog cadastrado com sucesso");
    },
};