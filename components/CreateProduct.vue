<template>
  <div>
    <form @submit.prevent="submitForm" class="flex flex-col gap-4">
      <div class="  ">
        <label for="title">Title:</label>
        <input type="text" id="title" class="" v-model="product.title" />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="product.description"></textarea>
      </div>
      <div>
        <label for="image">Image:</label>
        <input type="text" id="image" v-model="product.image" />
      </div>
      <div>
        <label for="audience">Audience:</label>
        <input type="text" id="audience" v-model="product.audience" />
      </div>
      <div>
        <label for="type">Type:</label>
        <input type="text" id="type" v-model="product.type" />
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="product.price" />
      </div>


      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {

  data() {
     const productStore = useProductStore()
    return {
      product: {
        title: 'Vintage Stripe Test 1',
        description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ea modi soluta similique ut illo.',
        img: 'https://images.unsplash.com/photo-1675595937692-ba33815da2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        audience: 'Female',
        type: 'Hat',
        price: 25.00,
        quantity: 0,
        priceID:''
      },
      productStore
    };
  },
  methods: {
    submitForm() {
   this.productStore.add(this.product)
      console.log(this.product);
    },
  },
};
</script>
