import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosInstance.get("/orders/admin")
      .then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {orders.map(order => (
        <div key={order.id}>
          Order #{order.id} - {order.orderStatus}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
