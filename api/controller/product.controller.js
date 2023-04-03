import '../model/connection.js';
import url from 'url';
import path from 'path';

import ProductSchemaModel from '../model/product.model.js';

// --------------------fetch products-api-----------------------!!
export var allProducts=async(req,res,next)=>{
    var proDetails=await ProductSchemaModel.find({});
    res.status(200).json({proDetails});
};

