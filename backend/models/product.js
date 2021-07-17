const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter product name'],
        trim: true,
        maxLength:[100, 'product name can not exceed 100 character']
    },
    price: {
        type: Number,
        required: [true, 'please enter product price'],
        maxLength: [5, 'product name can not exceed 5 character'],
       default:0.0
    },
    description: {
        type: String,
        required: [true, 'please enter product description'],
    },
    rating: {
        type: Number,
        default:0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required:true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'please select the category for this product'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                "Books",
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message:'Please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, "please enter product stock"],
        maxLength: [5, 'product name can not exceed 5 charaters'],
        default:0
    },
    numofReviews: {
        type: Number,
        default:0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required:true   
            },
            comment: {
                type: String,
                required:true
            }
        }
    ],
    createdAt: {
        type: Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Product', productSchema);