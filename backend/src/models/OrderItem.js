import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const OrderItem = sequelize.define("OrderItem", {
  quantity: DataTypes.INTEGER,
  price: DataTypes.FLOAT,
});
