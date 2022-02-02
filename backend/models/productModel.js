const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
     image: { type: String},
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Product', productSchema);
