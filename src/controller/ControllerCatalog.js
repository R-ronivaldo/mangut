const mongoose = require("mongoose");

const Product = mongoose.model('Product');
const Catalog = mongoose.model('Catalog');

const ControllerUser = require("./ControllerUser");

module.exports = {
    async insert(req, res){
        try {
            const catalog = await Catalog.create(req.body);

            const catalogs = await Catalog.find({user: req.body.user});
            
            const user = await ControllerUser.addCatalogOnUser(req.body.user,catalogs);

            return res.send({user});
        } catch (err) {
            return res.status(400).send({ error: 'Error creating catalog'});
        }
    },

    async selectById(req,res){
        try {
            const catalog = await Catalog.findById(req.params.id);
            
            return res.json(catalog);
        } catch (err) {
            return res.status(400).send({ error: 'Error loading catalog'});
        }
    },

    async update(req, res){
        try {
            const catalog = await Catalog.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
            return res.json(catalog);
        } catch (err) {
            return res.status(400).send({ error: 'Error updating catalog'});
        }
    },

    async remove(req, res){

        const ControllerProduct = require("./ControllerProduct");
        
        try {
            const idCatalog = req.params.id;

            const products = await Product.find({catalog: idCatalog});

            products.map(async product => {
               
                await ControllerProduct.removeByIdProductInternal(product._id);

           });
           
            await Catalog.findByIdAndRemove(idCatalog);

            return res.status(200).send("Catalog successfully removed");
        } catch (err) {
            return res.status(400).send({ error: 'Error removing catalog'});
        }
    },

    async selectByIdProfile(req, res){
        try {
            const catalog = await Catalog.find({profile_id: req.params.id});
            
            return res.json(catalog);
        } catch (err) {
            return res.status(400).send({ error: 'Error loading catalog'});
        }
    },

    //
    // FUNÇÕES INTERNAS
    //

    async addProductOnCatalog(idCatalog,products){

        const catalog = await Catalog.findById(idCatalog);

        catalog.products = products;

        const catalogUdp = await Catalog.findByIdAndUpdate(idCatalog,catalog, {new:true});

        return ({catalogUdp});
    },
};