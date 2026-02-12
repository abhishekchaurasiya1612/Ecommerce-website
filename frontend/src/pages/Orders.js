import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosInstance.get("/orders")
      .then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.map(order => (
        <div key={order.id}>
          Order #{order.id} - ₹{order.totalAmount}
        </div>
      ))}
    </div>
  );
}

export default Orders;
