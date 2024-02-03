import Stripe from "stripe";

const { STRIPE_SECRET_KEY } = process.env;

export const stripe = new Stripe(STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
  appInfo: {
    name: "Ignite Shop",
  },
});
