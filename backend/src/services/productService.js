import { Op } from "sequelize";
import { Product } from "../models/Product.js";

/**
 * Create new product
 */
export const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

/**
 * Get all products with pagination & search
 */
export const getAllProductsService = async (query) => {
  const { page = 1, limit = 10, search } = query;

  const offset = (page - 1) * limit;

  const whereCondition = search
    ? {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      }
    : {};

  const products = await Product.findAndCountAll({
    where: whereCondition,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [["createdAt", "DESC"]],
  });

  return {
    total: products.count,
    page: parseInt(page),
    totalPages: Math.ceil(products.count / limit),
    products: products.rows,
  };
};

/**
 * Get single product
 */
export const getProductByIdService = async (id) => {
  const product = await Product.findByPk(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

/**
 * Update product
 */
export const updateProductService = async (id, data) => {
  const product = await Product.findByPk(id);

  if (!product) {
    throw new Error("Product not found");
  }

  await product.update(data);

  return product;
};

/**
 * Delete product
 */
export const deleteProductService = async (id) => {
  const product = await Product.findByPk(id);

  if (!product) {
    throw new Error("Product not found");
  }

  await product.destroy();

  return { message: "Product deleted successfully" };
};
