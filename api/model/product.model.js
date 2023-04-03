import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price is must"],
    },
    featured: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: '{VALUE}is not supported',
        },
    },
});

// Apply the uniqueValidator plugin to UserSchema.
productSchema.plugin(uniqueValidator);

// compile schema to model
const productSchemaModel = mongoose.model('products_collection', productSchema);

export default productSchemaModel