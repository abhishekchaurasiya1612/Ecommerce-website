import { User } from "./User.js";
import { Product } from "./Product.js";
import { Order } from "./Order.js";
import { OrderItem } from "./OrderItem.js";
import { Cart } from "./Cart.js";

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

User.hasMany(Cart);
Cart.belongsTo(User);

Product.hasMany(Cart);
Cart.belongsTo(Product);
