//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SubCategorySchema = mongoose.Schema({
  _id: Number,
  catname: {
    type: String,
    required: [true,"Category is required"],
    lowercase: true,
    trim: true,
  },
  subcatname: {
    type: String,
    unique: true,
    required: [true,"SubCategory is required"],
    lowercase: true,
    trim: true,
  },
  subcaticonname: {
    type: String,
    required: [true,"SubCategory icon is required"],
    trim: true
  }
});

// Apply the uniqueValidator plugin to UserSchema.
SubCategorySchema.plugin(uniqueValidator);

// compile schema to model
const SubCategorySchemaModel = mongoose.model('subcategory_collection',SubCategorySchema);

export default SubCategorySchemaModel