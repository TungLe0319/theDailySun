<template>
  <div
    class="p-5 rounded-md my-4 flex justify-between product-card transition-colors"
  >
    <div class="card flex">
      <img
        :src="
          product.img ||
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
        "
        alt="Product Image"
        class="product-image shadow-lg shadow-slate-400"
      >
      <div class="ml-4">
        <h1 class="text-lg">
          {{ product.title }}
        </h1>
        <h2 class="text-md font-bold text-gray-600">
          {{ product.audience }}
        </h2>
        <nuxt-link :to="`/products/${product.id}`">
          <h2
            class="text-md font-bold text-gray-600 mb-5 underline-offset-4 underline hover:text-blue-500 transition-colors"
          >
            Go To Product
          </h2>
        </nuxt-link>

        <RemoveFromCart :productId="product.id" />
      </div>
    </div>
    <div class="flex gap-x-20">
      <p>{{ product.quantity }}</p>
      <div class="">
        <p>${{ product.price }}</p>
        <div class="flex">
          <small> (${{ product.price }} * {{ product.quantity }}) </small>
          <p>${{ totalPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RemoveFromCart from './RemoveFromCart.vue'

export default {
  components: { RemoveFromCart },
  props: {
    product: { type: Object, required: false }
  },
  setup (props) {
    return {
      totalPrice: computed(() => {
        return props.product.price * props.product.quantity
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.product-image {
  height: 200px;
  width: 150px;
  object-fit: cover;

  border-radius: 8px;
}
.product-card:hover {
  transition: all 0.5 ease !important;
  background-color: rgb(148 163 184);
  img {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.658),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}
.product-card {
  transition: all 0.5 ease !important;
}
</style>
