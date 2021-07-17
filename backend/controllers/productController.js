const Product = require('../models/product');

//create new product=>  api/vi/product/new

exports.newProduct = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}


//get all products=> /api/vi/products
exports.getProducts = async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        count:products.length,
        products
})  
}

//gets ingle product information-> /api/vi/product/:id

exports.getSingleProduct = async (req, res, next) => {
    
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            sucesss: false,
            message:'product not found'
         })        
    }
   
     res.status(200).json({
         sucess: true,
         product
     })

}

// update product =>  /api/vi/admin/product/:id

exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id);
    
    if (!product) {
        return res.status(404).json({
            sucesss: false,
            message:'product not found'
         })        
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
    
}

// delete product => api/vi/admin/product/:id

exports.deleteProduct = async (req, res, next)=>{
    
    const product = await Product.findById(req.params.id);

     
    if (!product) {
        return res.status(404).json({
            sucesss: false,
            message:'product not found'
         })        
    }
   
    await product.remove();

    res.status(200).json({
        sucess: true,
        message:'product is deleted'
    })
    
}