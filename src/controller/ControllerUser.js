const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User");

const authConfig = require("../config/Auth.json");

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 600,
    });           
}

module.exports = {
    async insert(req, res){
        try {
            const user = await User.create(req.body);
           
            return res.send(
                {user,
                token: generateToken({ id: user.id}), 
                });
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
           
            return res.status(200).send("user successfully removed");
        } catch (err) {
            return res.status(400).send({ error: 'Error removing user'});
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