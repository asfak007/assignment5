const express=require('express');
const ProductController=require('../controller/ProductController')


const router=express.Router();


// Invoice & Payment
router.post('/CreateProduct',ProductController.create)
router.get('/GetProduct',ProductController.read);
router.get('/GetProductById/:id',ProductController.readById);
router.post('/UpdateProduct/:id',ProductController.update)
router.post('/DeleteProduct/:id',ProductController.delete);


module.exports=router;