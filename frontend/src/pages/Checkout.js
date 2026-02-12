import axiosInstance from "../api/axiosInstance";

function Checkout() {

  const handleCheckout = async () => {
    const res = await axiosInstance.post("/orders/checkout", {
      amount: 1000,
    });

    window.location.href = `https://checkout.stripe.com/pay/${res.data.id}`;
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Pay Now</button>
    </div>
  );
}

export default Checkout;
