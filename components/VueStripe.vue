<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      :pk="pk"
      :items="items"
      :successUrl="successUrl"
      :cancelUrl="cancelUrl"
    />
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  data () {
    this.pk = process.env.STRIPE_PK;
    return {
      items: [
        {
          sku: 'sku_FdQKocNoVzznpJ',
          quantity: 1,
        },
      ],
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
    };
  },
  methods: {
    checkout () {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
