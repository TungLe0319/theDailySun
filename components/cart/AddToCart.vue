<template>
  <div class="">
    <button class="add-to-cart-button font-1" @click="test(productData)">
      <img
        src="https://cdn-icons-png.flaticon.com/512/8358/8358970.png"
        alt="cart icon"
        width="30"
      />
      Add To Cart
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  productData: { typeof: Object },
});
const { productData } = toRefs(props);
const cartStore = useCartStore();
async function test(productData) {
  if (productData.quantity >= 20) {
    return Pop.toast('Item Count Exceeded', 'warning', 'top')
  }
  cartStore.add(productData);
  Pop.toast(`Added To Cart`, "success",'top', 1500);
}
</script>

<style lang="scss" scoped>
.add-to-cart-button {
  @apply text-xl font-bold p-2 rounded-md px-4  flex gap-x-4 hover:scale-105 transition-all hover:underline hover:bg-zinc-700 hover:text-white;
}
</style>
