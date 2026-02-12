import express from "express";
import { createProduct, getProducts } from "../controllers/productController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", verifyToken, isAdmin, createProduct);

export default router;
