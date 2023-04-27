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

   <div>
    <input type="checkbox" id="female" @change="sortBy('audience', true)" v-model="femaleChecked">
    <label for="female">Female</label>
  </div>
  <div>
    <input type="checkbox" id="male" @change="sortBy('audience', false)" v-model="maleChecked">
    <label for="male">Male</label>
  </div>
  <div>
    <input type="checkbox" id="glasses" @change="sortBy('type', true)">
    <label for="glasses">Glasses</label>
  </div>
  <div>
    <input type="checkbox" id="hats" @change="sortBy('type', false)">
    <label for="hats">Hats</label>
  </div>
  <div>
    <input type="checkbox" id="low-to-high" @change="sortBy('price', true)">
    <label for="low-to-high">Sort by Price (Low to High)</label>
  </div>
  <div>
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

}
/* Hide the default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
}

/* Style the custom checkbox */
.checkmark {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
}

/* Style the checkmark when checkbox is checked */
.checkbox-container input:checked + .checkmark:after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Style the label text */
.checkbox-container {
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 12px;
}

/* Change color of checkmark when checkbox is hovered over */
.checkbox-container:hover input ~ .checkmark,
.checkbox-container input:focus ~ .checkmark {
  border-color: #000;
}

</style>
