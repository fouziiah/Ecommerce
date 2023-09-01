const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        enum: ["Women's Clothing", "Men's Clothing",'jewelery', 'Electronics'], 
        required: true,
      }


})

module.exports = mongoose.model('product', productSchema) 