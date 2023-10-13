<template>
  <div>


   <div class="relative hero-image-container flex  justify-center">
      <img
        class="hero-image"
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="hero image"
      />
      <div class="hero-text">
        <h1 class="text-8xl text-shadow-overlay">Products</h1>

      </div>

 <div class="checkboxes">
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


    <div
      class="text-black pb-20  flex justify-center px-8 flex-col"
    >
      <div class="relative">
        <div class="mt-4">
          <div class="flex flex-wrap justify-between md:gap-x-10  md:gap-y-4 ">
            <div v-for="i in products" :key="i" class=" md:w-1/6 sm:w-1/4 w-full py-2 flex justify-center">
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

.checkboxes {
  @apply flex justify-center gap-x-3 my-3 absolute bottom-1   p-3 rounded ;
}
.checkbox-container {
  @apply p-1 px-1.5 text-white rounded flex items-center hover:scale-105 transition-all duration-300 ease-in-out shadow-md;

  input[type="checkbox"] {
    margin-right: 4px;
    accent-color: var(--prime-orange);
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label {
    @apply text-orange-300;
  }

  label {
    @apply hover:cursor-pointer;
  }

  // when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    @apply h-1/2;

    label{
      @apply text-xs;
    }
  }
}

</style>
