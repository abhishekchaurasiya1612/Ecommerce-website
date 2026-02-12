import { stripe } from "../config/stripe.js";

export const checkout = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "inr",
        product_data: { name: "Order Payment" },
        unit_amount: req.body.amount * 100,
      },
      quantity: 1,
    }],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
};
