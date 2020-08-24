'use strict';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
  create: async ctx => {
    const {
      name,
      email,
      amount,
      token,
    } = ctx.request.body;

    // Charge the donor
    try {
      await stripe.charges.create({
        // Transform cents to dollars.
        amount: amount * 100,
        currency: 'usd',
        description: `Gift ${new Date()}`,
        source: token,
      });

      // Register the gifts in the database
      try {
        const gift = await strapi.services.gifts.create({
          name,
          email,
          amount,
        });

        // send an email by using the email plugin
        strapi.plugins['email'].services.email.send({
          to: email,
          from: 'us@leighandryan.com',
          replyTo: 'no-reply@leighandryan.com',
          subject: 'Thank you!',
          text: `Dear ${name.split(' ')[0]},
You'll get a proper thank you card eventually, but since we also wanted to confirm that we received your gift, this seemed like a good opportunity to thank you less formally.
            Love,
            Leigh & Ryan
          `,
        });

        return gift;
      } catch (err) {
        // Silent
      }
    } catch (err) {
      // Silent
    }
  },
};