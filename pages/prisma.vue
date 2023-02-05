eslint-disable @typescript-eslint/no-unused-vars
<script setup lang="ts">
// import { cartService } from '~~/composables/services/CartService'
// import Pop from '~~/utils/Pop'

import { Cart, Product } from '.prisma/client'

// import { Cart } from '.prisma/client'

// const getCart = async () => {
//   try {
//     await cartService.getCartByUserId()
//   } catch (error) {
//     Pop.error(error)
//   }
// }
let cart: Cart & {
  products : Product
}
const getCart = async () => {
  const { data } = await useFetch('/api/cart')
  cart = data.value
}

// const { data: token } = useSession()
</script>

<template>
  <div class=" mt-40">
    <p>{{ 'are you logged in' }}</p>
    <button @click="getCart">
      button
    </button>
    <div v-if="cart">
      {{ cart }}
    </div>
  </div>
</template>
