import axiosInstance from "../api/axiosInstance";

const ProductCard = ({ product }) => {

  const addToCart = async () => {
    await axiosInstance.post("/cart", {
      productId: product.id,
      quantity: 1,
    });

    alert("Added to cart");
  };

  return (
    <div style={{ border: "1px solid gray", margin: 10 }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
