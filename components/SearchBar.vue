<template>
  <div class="relative flex">
    <div class="" @click="expanded = !expanded">
      <img
        src="https://cdn-icons-png.flaticon.com/512/64/64673.png"
        alt=""
        width="40"
      />
    </div>

    <input
 id="input1"
      :class="expanded ? '  search-input-expanded' : ' search-input'"
      type="text"
      placeholder="Search"
      @input="searchProducts"
    />

    <div class="search-list" v-if="products.length >= 0 && expanded ">
      <ul class="item-list">
        <li class="item" v-for="p in products">
          <nuxt-link @click="clearSearch()" class="link" :to="`/products/${p.id}`">
            {{ p.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
@focus="expanded = true" @blur="expanded = false"
<script setup>
let expanded = useState("expanded", () => false);
const productStore = useProductStore();
let products = useState("products", () => []);


const searchProducts = (event) => {
  const query = event.target.value.trim().toLowerCase();
  if (query.length === 0) {
    products.value = [];
    return;
  }
  products.value = productStore.products.filter((p) =>
    p.title.toLowerCase().includes(query)
  );
};
const clearSearch = (event) => {
  const input =  document.querySelector('input')
  input.value = ''
 products.value= []
 expanded.value = false
}
watch(
  () => productStore.products,
  (newProducts) => {
    if (newProducts.length >= 2) {
      products.value = newProducts;
    }
  }
);
</script>

<style lang="scss" scoped>
.link {
  font-size: 16px !important;
}
.search-input {
  transition: all 0.2s ease;
  width: 0 !important;

}
.search-input-expanded {
  width: 300px;
  transition: all 0.5s ease;
  padding: 3px 20px 2px 10px;
  margin-left: 3px;
  @apply block rounded-md bg-slate-300 text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-200 sm:text-sm
}
.search-list {
  @apply absolute top-14 left-12 z-50 bg-slate-100 bg-opacity-50 rounded-md;
}
.item-list {
  @apply h-auto max-h-60 w-auto  max-w-full overflow-y-scroll;
}
.item {
  @apply my-2;
}

.not-visible {
  .search-list {
    background-color: rgba(0, 0, 0, 0.584);
    backdrop-filter: blur(4px);
  }
}

/* Set the width and height of the scrollbar */
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

/* Set the track color */
::-webkit-scrollbar-track {
  background: #f1f1f144;
}

/* Set the thumb color and border */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
  border: 3px solid #f1f1f1;
}

/* Set the thumb color on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
