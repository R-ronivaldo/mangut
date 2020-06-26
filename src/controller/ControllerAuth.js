const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = mongoose.model("User");

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

            res.send({ user });
        
        } catch (err) {
            return res.status(400).send({ error: 'Error singing user'});
        }
    },
}