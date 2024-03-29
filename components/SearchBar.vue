<template>
  <div class="relative flex">
    <img
      src="../assets/magnifier.png"
      alt=""
      width="40"
      class="cursor-pointer magnifier"
      id="magnifier"
      v-if="isVisible"
    />
    <svg
      v-else
      @click="expanded = !expanded"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      width="40"
      x="0"
      y="0"
      viewBox="0 0 310.42 310.42"
      style="enable-background: new 0 0 512 512"
      xml:space="preserve"
      class="cursor-pointer"
    >
      <g>
        <path
          d="M273.587 214.965c49.11-49.111 49.109-129.021 0-178.132-49.111-49.111-129.02-49.111-178.13 0C53.793 78.497 47.483 140.462 76.51 188.85c0 0 2.085 3.498-.731 6.312l-64.263 64.263c-12.791 12.79-15.836 30.675-4.493 42.02l1.953 1.951c11.343 11.345 29.229 8.301 42.019-4.49l64.128-64.128c2.951-2.951 6.448-.866 6.448-.866 48.387 29.026 110.352 22.717 152.016-18.947zM118.711 191.71c-36.288-36.288-36.287-95.332.001-131.62 36.288-36.287 95.332-36.288 131.619 0 36.288 36.287 36.288 95.332 0 131.62-36.288 36.286-95.331 36.286-131.62 0z"
          fill="#ffffff"
          data-original="#000000"
          class=""
        ></path>
        <path
          d="M126.75 118.424c-1.689 0-3.406-.332-5.061-1.031-6.611-2.798-9.704-10.426-6.906-17.038 17.586-41.559 65.703-61.062 107.261-43.476 6.611 2.798 9.704 10.426 6.906 17.038-2.799 6.612-10.425 9.703-17.039 6.906-28.354-11.998-61.186 1.309-73.183 29.663-2.099 4.959-6.913 7.938-11.978 7.938z"
          fill="#ffffff"
          data-original="#000000"
        ></path>
      </g>
    </svg>

    <input
      id="input1"
      class="search-input"
      type="text"
      placeholder="Search..."
      @input="searchProducts"
    />

    <div class="search-list" v-if="products?.length >= 0  && expanded">
      <ul class="item-list">
        <li class="" v-for="p in products">
          <nuxt-link
            @click="clearSearch()"
            class="item-link"
            :to="`/products/${p.id}`"
          >
            <div class="flex mx-2">
              <img
                :src="p.img"
                alt=""
                class="w-10 rounded-full h-10 item-img mx-2"
              />
              {{ p.title }}
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
let expanded = useState("expanded", () => false);
const productStore = useProductStore();
let products = useState("products", () => []);
let isVisible = ref(true);
let scrollTest = ref(true);
const searchProducts = (event) => {
  const query = event.target.value.trim().toLowerCase();
  if (query.length === 0) {
    products.value = [];
    expanded= false
    return;
  }
  products.value = productStore.products.filter((p) =>
    p.title.toLowerCase().includes(query)
  );
  expanded= true
};
const clearSearch = (event) => {
  const input = document.querySelector("input");
  input.value = "";
  products.value = [];
  expanded.value = false;
};
watch(
  () => productStore.products,
  (newProducts) => {
    if (newProducts.length >= 2) {
      products.value = newProducts;
    }
  }
);

const handleScroll = () => {
  const scrollTop = window.scrollY;
  if (scrollTop >= 50) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }
};

// Add event listener for scroll
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Remove event listener on unmount
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>


.item-link {
  transition: all 0.5s ease;
  font-size: 16px;
  margin: 0 6px;
  border-radius: 8px;
  font-weight: 600;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    padding: 4px 4px;
  }
}
.item-link:before {
  content: "";
  position: absolute;
  width: 0px;
  transform: translateX(0px);
  height: 3px;
  background-color: #ffb039;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.5s ease;
}
.item-link:hover:before {
  transition: all 0.5s ease;
  width: 100%;
}
.item-img {
  width: 30px;
  height: 30px;
  object-fit: cover;
  position: relative;
}

.search-input {
  @apply bg-zinc-100 px-3 py-2 rounded mx-2 focus:outline-none;
}
.search-list {
  @apply absolute top-14 left-12 z-50 bg-slate-100 bg-opacity-50 rounded-md;
}
.item-list {
  @apply h-auto max-h-60  w-52  max-w-full overflow-y-scroll;
}
.item {
  @apply my-2;
}

.not-visible {
  .magnifier {
    src: url(../assets/magnifierWhite.png) !important;
  }
  .search-list {
    background-color: rgba(0, 0, 0, 0.584);
    backdrop-filter: blur(4px);
  }
  .search-input {
    background-color: rgba(0, 0, 0, 0.584);
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
  background: #ffb039;
  border-radius: 6px;
  border: 3px solid #f1f1f1;
}

/* Set the thumb color on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
