const mongoose = require("mongoose");

const Evaluation = mongoose.model('Evaluation');
const ControllerProduct = require("./ControllerProduct");

module.exports = {
    async insertOrUpdate(req, res){
        try {
            const evaluation = await Evaluation.findOne({evaluatorProfile_id: req.body.evaluatorProfile_id});

            if (evaluation){
                
                evaluation.stars = req.body.stars;
                
                evaluation.coment = req.body.coment;

                const evaluationUpd = await Evaluation.findByIdAndUpdate(evaluation.id,evaluation,{new:true});

                return res.send({evaluationUpd});
            
            } else {

                const evaluationNew = await Evaluation.create(req.body);
            
                const idProduct = req.body.product;

                const evaluations = await Evaluation.find({product: idProduct});
                
                const product = await ControllerProduct.addEvaluationOnProduct(idProduct,evaluations);

                return res.send({evaluationNew});
            }
        } catch (err) {
            return res.status(400).send({ error: 'Error creating evaluation'});
        }
    },

    async selectById(req,res){
        const evaluation = await Evaluation.findById(req.params.id);

        return res.json(evaluation);
    },

    async remove(req, res){
        await Evaluation.findByIdAndRemove(req.params.id);

        return res.status(200).send("Evaluation registered successfully");
    },

    async selectByIdProduct(req, res){
        const evaluation = await Evaluation.find({product_id: req.params.id});

        return res.json(evaluation);
    },

    async removeByIdProduct(req, res) {
        await Evaluation.remove({product_id: req.params.id});

        return res.status(200).send("Evaluation successfully deleted");
    },

    //
    // FUNÇÕES INTERNAS
    //

    async removeByIdProductInternal(idProduct){
        
        return await Evaluation.remove({product: idProduct});

     }
};