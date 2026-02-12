import 'dotenv/config';
import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey) {
	// eslint-disable-next-line no-console
	console.error('STRIPE_SECRET_KEY is not defined. Set it in your .env or the environment.');
}

export const stripe = new Stripe(stripeKey, { apiVersion: '2023-08-16' });
