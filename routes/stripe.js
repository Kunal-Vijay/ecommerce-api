const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const Client_URL = process.env.Client_URL;

router.post("/payment", async (req, res) => {
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
          images: [item.img],
          description: item.desc,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });
  
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${Client_URL}/success`,
    cancel_url: `${Client_URL}/cart`,
  });

  res.send({ url: session.url});
});

module.exports = router;
