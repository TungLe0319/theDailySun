<template>
  <div class="">
    <button
      class="checkOut font-1 text-xl font-bold hover:text-red-400 transition-all duration-200"
      @click="remove(productId)"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/458/458594.png"
        alt="remove Icon"
        width="30"
        class="icon"
      />
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  productId: { typeof: String },
});

const { product } = toRefs(props);
const cartStore = useCartStore();

async function remove(productId) {
  try {
  const yes = await Pop.confirm('Are you sure you want to remove this item from your cart?', 'Remove Item')
        if (!yes) {
          return
        }
    await cartStore.remove(productId);
    Pop.toast("Added To Cart", "success", "top-end", 1500);
  } catch (error) {
    Pop.error(error, "[]");
  }
}
</script>

<style lang="scss" scoped>
.icon {
  transition: transform 0.5s ease;
}
.icon:hover {
  transform: rotate(180deg);
  transition: transform 0.5s ease;
}
</style>
