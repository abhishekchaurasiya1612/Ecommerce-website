import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Order = sequelize.define("Order", {
  totalAmount: DataTypes.FLOAT,
  paymentStatus: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },
  orderStatus: {
    type: DataTypes.STRING,
    defaultValue: "processing",
  },
});
