import express from 'express';
import * as subcategoryController from '../controller/subcategory.controller.js';

var router = express.Router();

router.post("/save",subcategoryController.save);

router.get("/fetch",subcategoryController.fetch);

router.delete("/delete/:id",subcategoryController.deleteCategory);

router.patch("/update",subcategoryController.updateCategory);

export default router;
