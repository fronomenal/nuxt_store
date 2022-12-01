import Stripe from "stripe";

export default defineEventHandler(async (event: any) => {

  const {stripeKey, serverURL} = useRuntimeConfig();
  const stripe = new Stripe(stripeKey, null);

  const body = await readBody(event);

  let stripeItems = []

  body.forEach(el => {
    stripeItems.push({price: el.id, quantity: el.quantity})
  });

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: `${serverURL}/success`,
    cancel_url: `${serverURL}/failure`
  })

  return {url: session.url}
})
