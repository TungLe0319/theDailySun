<template>
  <div class="text-black py-24 bg-slate-300 flex justify-center px-8">
    <div class="  ">
      <div class="justify-center flex text-center">
        <h1 class="text-5xl">Products</h1>
      </div>
      <div class="mt-4 flex justify-center gap-4">
        <button class="sort-button text-lg" @click="sortBy('audience', true)">
          Female
        </button>
        <button class="sort-button text-lg" @click="sortBy('audience', false)">
          Male
        </button>
        <button class="sort-button text-lg" @click="sortBy('type', true)">
          Glasses
        </button>
        <button class="sort-button text-lg" @click="sortBy('type', false)">
          Hats
        </button>
        <button class="sort-button text-lg" @click="sortBy('price', true)">
          Sort by Price (Low to High)
        </button>
        <button class="sort-button text-lg" @click="sortBy('price', false)">
          Sort by Price (High to Low)
        </button>
      </div>

      <div class="mt-4">
        <div class="flex flex-wrap justify-between gap-1">
          <transition-group
            name="fade"
            tag="div"
            class="flex flex-wrap gap-3 justify-center"
          >
            <div v-for="i in products" :key="i" class="w-1/6 py-2">
              <ItemCard :product="i" v-bind:key="i.id" />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";

import { useProductStore } from "~~/stores/ProductStore";

const productStore = useProductStore();
productStore.getProducts();
const products = computed(() => productStore.products);
logger.log(products.value);

const sortBy = (sortKey, isAscending = true) => {
  const sortedProducts = products.value.sort((a, b) => {
    if (sortKey === "audience") {
      return isAscending
        ? a[sortKey].localeCompare(b[sortKey])
        : b[sortKey].localeCompare(a[sortKey]);
    } else if (sortKey === "price") {
      return isAscending ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
    } else {
      return isAscending
        ? a[sortKey].localeCompare(b[sortKey])
        : b[sortKey].localeCompare(a[sortKey]);
    }
  });

  return sortedProducts;
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
