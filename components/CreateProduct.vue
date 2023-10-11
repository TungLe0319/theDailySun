<template>
  <div>
    <div>
      <!-- Collapsible Button -->
      <button
        @click="toggleCollapse"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create Product
      </button>

      <!-- Collapsible Content -->
      <div v-if="isCollapsed" class="my-4 p-4 border border-gray-300 rounded">
        <form class="flex flex-col gap-4 p-4 m-4" @submit.prevent="submitForm">
          <div class="mb-4">
            <label
              for="title"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Title</label
            >
            <input
              id="title"
              type="text"
              placeholder="Title"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              v-model="product.title"
            />
          </div>

          <!-- Description -->
          <div class="mb-4">
            <label
              for="description"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              placeholder="Description"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-60"
              v-model="product.description"
            ></textarea>
          </div>

          <!-- Img URL -->
          <div class="mb-4">
            <label for="img" class="block text-gray-700 text-sm font-bold mb-2"
              >Img</label
            >
            <input
              id="img"
              type="url"
              placeholder="URL"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              v-model="product.img"
            />
          </div>

          <!-- Audience Select -->
          <div class="mb-4 w-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Audience</label
            >

            <select
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              v-model="product.audience"
            >
              <option
                v-for="option in audience"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <!-- Type Select -->
          <div class="mb-4 w-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Type</label
            >

            <select
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              v-model="product.type"
            >
              <option
                v-for="option in type"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <!-- Price -->
          <div class="mb-4 w-1/3">
            <label
              for="price"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Price</label
            >
            <input
              id="price"
              type="text"
              placeholder="Only allow number"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              :class="{ 'border-red-500': !product.price }"
            />
          </div>

          <!-- Submit Button -->
          <div class="mt-6">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
        <p>This is the collapsible content.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const productStore = useProductStore();
    return {
      product: {
        title: "Gents Transparent Frames",
        description:
          "Introducing our stylish and versatile female hat, perfect for any season and occasion. Made with high-quality materials, this hat features a classic design with a comfortable fit. Whether you're running errands, going to the beach, or simply adding a touch of flair to your outfit, this hat is the perfect accessory. Its lightweight and breathable fabric makes it ideal for all-day wear, while the adjustable strap ensures a custom fit for maximum comfort. Available in a variety of colors, this hat is the perfect addition to your wardrobe, making it easy to express your personal style. Order yours today and experience the ultimate in style, comfort, and convenience!",
        img: "https://images.unsplash.com/photo-1610319471440-04c408a19b3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        audience: "Male",
        type: "Glasses",
        price: 22.0,
        quantity: 0,
        priceID: "",
      },
      productStore,

      audience: ref([
        {
          label: "Female",
          value: "Female",
        },
        {
          label: "Male",
          value: "Male",
        },
      ]),
      type: ref([
        {
          label: "Hat",
          value: "Hat",
        },
        {
          label: "Glasses",
          value: "Glasses",
        },
      ]),

      isCollapsed: false,
    };
  },
  methods: {
    submitForm() {
      this.productStore.add(this.product);
      // console.log(this.product)
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed; // Toggle the collapsed state
    },
  },
};
</script>
