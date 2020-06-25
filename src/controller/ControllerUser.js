const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = mongoose.model("User");

module.exports = {
    async insert(req, res){
        try {
            const user = await User.create(req.body);
            return res.json(user);
        } catch (err) {
            return res.status(400).send({ error: 'Error creating user'});
        }
    },

    async select(req, res){
        try {
            const user = await User.findById(req.params.id).populate('catalogs');
            return res.json(user);
        } catch (err) {
            return res.status(400).send({ error: 'Error loading users'});
        }
    },

    async update(req, res) {
        try {

            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(user);
        
        } catch (err) {
            return res.status(400).send({ error: 'Error updationd user'});
        }
        
    },

    async remove(req, res) {
        try {

            await User.findByIdAndRemove(req.params.id);
            return res.status(200).send("Usuário deletado com sucesso!");
        
        } catch (err) {
            return res.status(400).send({ error: 'Error removing user'});
        }
    },
    async acess(req, res) {

        try {

            const { email, password } = req.body;

            const user = await User.findOne({ email }).select('+password');

            if (!user)
            return res.status(400).send({ error: 'User not found' });

            if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'User invalid' });

            user.password = undefined;

            res.send({ user });
        
        } catch (err) {
            return res.status(400).send({ error: 'Error singing user'});
        }
    },

     //
    // FUNÇÕES INTERNAS
    //

    async addCatalogOnUser(idUser,catalogs){

        const user = await User.findById(idUser);

        user.catalogs = catalogs;

        const userUdp = await User.findByIdAndUpdate(idUser,user, {new:true});

        return ({userUdp});
    },
};