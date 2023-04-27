<template>
  <div class="text-black py-24 bg-slate-300 flex justify-center px-8">
    <div class="  ">
      <div class="justify-center flex text-center">
        <h1 class="text-5xl">Products</h1>
      </div>
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
 <div class="flex justify-between">





















   <div class="checkbox-container">
    <input type="checkbox" id="female" @change="sortBy('audience', true)" v-model="femaleChecked">
    <label for="female">Female</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="male" @change="sortBy('audience', false)" v-model="maleChecked">
    <label for="male">Male</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="glasses" @change="sortBy('type', true)">
    <label for="glasses">Glasses</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="hats" @change="sortBy('type', false)">
    <label for="hats">Hats</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="low-to-high" @change="sortBy('price', true)">
    <label for="low-to-high">Sort by Price (Low to High)</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="high-to-low" @change="sortBy('price', false)">
    <label for="high-to-low">Sort by Price (High to Low)</label>
  </div>

 </div>
      <div class="mt-4">
        <div class="flex flex-wrap justify-between md:gap-x-10 md:gap-y-4">

            <div v-for="i in products" :key="i" class="md:w-1/6 w-full py-2">
              <ItemCard :product="i" v-bind:key="i.id" />
            </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";

import { useProductStore } from "~~/stores/ProductStore";
const  femaleChecked= ref (false)
const  maleChecked= ref (false)
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
watchEffect(()=>{
//  if( maleChecked.value == true && femaleChecked.value == true){
// femaleChecked.value =  - !femaleChecked.value
// maleChecked.value = !maleChecked.value

// }
// if( femaleChecked.value == true){
// maleChecked.value = !maleChecked.value
// }
// if( maleChecked.value == true){
// femaleChecked.value = !femaleChecked.value

// }


//     maleChecked(newVal, oldVal) {
//       if (newVal) {
//         this.femaleChecked = false;
//       }
//     }
})
</script>
<style lang="scss" scoped>
input[type="checkbox"] {
  margin-right:  4px;
accent-color: var(--prime-orange);
width: 16px;
height: 16px;
}
/* Hide the default checkbox */


/* Style the custom checkbox */



.checkbox-container{
@apply p-1 px-1.5 bg-zinc-800 text-white rounded;


}

</style>
