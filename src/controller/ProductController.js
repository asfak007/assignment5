const ProductModel = require("../model/FoodModel")

exports.create=async (req,res,next) => {
    try {
        let reqbody = req.body;
        await ProductModel.create(reqbody);
        return res.status(201).send({status:"success",message:"Product created successfully."});

    }catch (e) {
        return res.status(200).json({error: e.toString()});
    }
}

exports.read=async (req,res,next) => {
    try{
        data = await ProductModel.find();

        return res.status(200).json({status:"success",message:"Product read successfully.",data:data});

    }catch (e){
        return res.status(200).json({error: e.toString()});
    }
}

exports.readById=async (req,res,next) => {
    try {
        let id = req.params.id;
        let data = await ProductModel.findById(id);
        return res.status(200).json({status:"success",message:"Product read successfully",data});
    }catch (e) {
        return res.status(200).json({error: e.toString()});
    }
}

exports.update=async (req,res,next) => {
    try{
        let {id} = req.params;
        let reqbody = req.body;
         let data = await ProductModel.updateOne({_id:id},reqbody);

        return res.status(200).json({status:"success",message:"Product updated successfully.",data:data});

    }catch (e) {
        return res.status(200).json({error: e.toString()});
    }
}
exports.delete=async (req,res,next) => {
    try{
        let {id} = req.params;
        await ProductModel.deleteOne({_id:id});
        return res.status(200).json({status:"success",message:"Product deleted successfully." });
    }catch (e) {
        return res.status(200).json({error: e.toString()});
    }
}