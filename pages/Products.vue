<template>
  <div>
  <div class="hero-image">
  <div class="justify-center flex text-center">
          <h1 class="text-8xl text-shadow text-white">Products</h1>
        </div>


   <div class=" checkboxes">
          <div class="checkbox-container">
            <input
              type="checkbox"
              id="female"
              @change="sortBy('audience', true)"
              v-model="femaleChecked"
            />
            <label for="female">Female</label>
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              id="male"
              @change="sortBy('audience', false)"
              v-model="maleChecked"
            />
            <label for="male">Male</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" id="glasses" @change="sortBy('type', true)" />
            <label for="glasses">Glasses</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" id="hats" @change="sortBy('type', false)" />
            <label for="hats">Hats</label>
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              id="low-to-high"
              @change="sortBy('price', true)"
            />
            <label for="low-to-high">Sort by Price (Low to High)</label>
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              id="high-to-low"
              @change="sortBy('price', false)"
            />
            <label for="high-to-low">Sort by Price (High to Low)</label>
          </div>
        </div>





    </div>
    <div class="text-black pb-20 bg-slate-300 flex justify-center px-8 flex-col">

      <div class="relative  ">

        <!-- <div class="mt-4 flex justify-center gap-4">
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
        </div> -->

        <div class="mt-4">
          <div class="flex flex-wrap justify-between md:gap-x-10 md:gap-y-4">
            <div v-for="i in products" :key="i" class="md:w-1/6 w-full py-2">
              <ItemCard :product="i" v-bind:key="i.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";

import { useProductStore } from "~~/stores/ProductStore";
const femaleChecked = ref(false);
const maleChecked = ref(false);
const productStore = useProductStore();
productStore.getProducts();
const products = computed(() => productStore.products);

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
.hero-image{
  background-image: url(https://wallpaperaccess.com/full/1272028.jpg);
  @apply w-full h-96 mt-16 bg-cover bg-center flex justify-center items-center relative shadow-md ;
}
.checkboxes {
  @apply flex justify-center gap-x-3 my-3 absolute bottom-1 bg-blue-100  p-3 rounded shadow-md;
}
.checkbox-container {
  @apply p-1 px-1.5 bg-zinc-800 text-white rounded flex items-center hover:scale-105 transition-all duration-300 ease-in-out shadow-md;

  input[type="checkbox"] {
    margin-right: 4px;
    accent-color: var(--prime-orange);
    width: 16px;
    height: 16px;
    cursor: pointer;

  }

  input[type="checkbox"]:checked + label {
   @apply text-orange-300
  }

  label{
    @apply hover:cursor-pointer
  }
}
</style>
