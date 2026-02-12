import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Cart = sequelize.define("Cart", {
  quantity: DataTypes.INTEGER,
});
console.log("Cart model loaded")
