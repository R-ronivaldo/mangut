const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/Auth.json");

const User = mongoose.model("User");

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 600,
    });           
}

module.exports = {
    async acess(req, res) {
        try {
            
            const { email, password } = req.body;

            const user = await User.findOne({ email }).select('+password');

            if (!user)
            return res.status(400).send({ error: 'User not found' });

            if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'User invalid' });

            user.password = undefined;

            //Gerar token para usuário

            res.send({ 
                user,
                token: generateToken({ ud: user.id}),
             });        
        } catch (err) {
            return res.status(400).send({ error: 'Error singing user'});
        }
    },
    async createToken(user){
        return ({user, token: generateToken({ id: user.id})})
    },
}