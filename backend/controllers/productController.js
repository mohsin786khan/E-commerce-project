const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandlers');
const catchAsyncError = require('../midllewares/catchAsyncError');


//create new product=>  api/vi/product/new

exports.newProduct = catchAsyncError( async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})


//get all products=> /api/vi/products
exports.getProducts = catchAsyncError( async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        count:products.length,
        products
})  
})

//gets ingle product information-> /api/vi/product/:id

exports.getSingleProduct = catchAsyncError( async (req, res, next) => {
    
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('product not found', 404));
    }
   
     res.status(200).json({
         sucess: true,
         product
     })
})

// update product =>  /api/vi/admin/product/:id

exports.updateProduct = catchAsyncError( async (req, res, next) => {

    let product = await Product.findById(req.params.id);
    
    if (!product) {
        return next(new ErrorHandler('product not found', 404));     
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        sucess: true,
        product
    })
    
})

// delete product => api/vi/admin/product/:id

exports.deleteProduct = catchAsyncError( async (req, res, next)=>{
    
    const product = await Product.findById(req.params.id);

     
    if (!product) {
        return next(new ErrorHandler('product not found', 404));    
    }
   
    await product.remove();

    res.status(200).json({
        sucess: true,
        message:'product is deleted'
    })
    
})