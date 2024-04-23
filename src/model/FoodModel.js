const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
    title:{type:String,required:true},
    food_code:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
    quantity:{type:Number,required:true},
    price:{type:Number,required:true},
},{timestamps:true,versionKey:false})

const ProductModel = mongoose.model('Food',DataSchema);
module.exports=ProductModel;