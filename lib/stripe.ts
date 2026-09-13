import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  // use the API version expected by the installed stripe types
  apiVersion: "2020-08-27",
});

export default stripe;
