import { Order } from "../models/Order.js";
import { OrderItem } from "../models/OrderItem.js";
import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";

/**
 * Create order from cart
 */
export const createOrderService = async (userId) => {
  // 1️⃣ Get cart items
  const cartItems = await Cart.findAll({
    where: { UserId: userId },
    include: Product,
  });

  if (!cartItems.length) {
    throw new Error("Cart is empty");
  }

  // 2️⃣ Calculate total amount
  let totalAmount = 0;

  cartItems.forEach((item) => {
    totalAmount += item.quantity * item.Product.price;
  });

  // 3️⃣ Create order
  const order = await Order.create({
    UserId: userId,
    totalAmount,
    paymentStatus: "pending",
    orderStatus: "processing",
  });

  // 4️⃣ Create order items
  for (const item of cartItems) {
    await OrderItem.create({
      OrderId: order.id,
      ProductId: item.ProductId,
      quantity: item.quantity,
      price: item.Product.price,
    });

    // Reduce stock
    item.Product.stock -= item.quantity;
    await item.Product.save();
  }

  // 5️⃣ Clear cart
  await Cart.destroy({ where: { UserId: userId } });

  return order;
};

/**
 * Get orders of logged-in user
 */
export const getUserOrdersService = async (userId) => {
  const orders = await Order.findAll({
    where: { UserId: userId },
    include: {
      model: OrderItem,
      include: Product,
    },
    order: [["createdAt", "DESC"]],
  });

  return orders;
};

/**
 * Admin: Get all orders
 */
export const getAllOrdersService = async () => {
  const orders = await Order.findAll({
    include: [
      {
        model: OrderItem,
        include: Product,
      },
    ],
    order: [["createdAt", "DESC"]],
  });

  return orders;
};

/**
 * Update order status (Admin)
 */
export const updateOrderStatusService = async (orderId, status) => {
  const order = await Order.findByPk(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  order.orderStatus = status;
  await order.save();

  return order;
};
