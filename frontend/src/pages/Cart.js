import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get("/cart")
      .then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          {item.Product.name} - {item.quantity}
        </div>
      ))}

      <button onClick={() => navigate("/checkout")}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
