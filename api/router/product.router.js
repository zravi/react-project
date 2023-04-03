import express from 'express';
import * as productController from '../controller/product.controller.js';

var router = express.Router();

router.get("/all",productController.allProducts);

export default router;