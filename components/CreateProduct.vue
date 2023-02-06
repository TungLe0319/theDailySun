<template>
  <div>
    <form class="flex flex-col gap-4" @submit.prevent="submitForm">
      <div class="  ">
        <label for="title">Title:</label>
        <input id="title" v-model="product.title" type="text" class="">
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="product.description" />
      </div>
      <div>
        <label for="image">Image:</label>
        <input type="text" id="image" v-model="product.img" />
      </div>
      <div>
        <label for="audience">Audience:</label>
        <input id="audience" v-model="product.audience" type="text">
      </div>
      <div>
        <label for="type">Type:</label>
        <input id="type" v-model="product.type" type="text">
      </div>
      <div>
        <label for="price">Price:</label>
        <input id="price" v-model="product.price" type="number">
      </div>

      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {

  data () {
    const productStore = useProductStore()
    return {
      product: {
        title: 'Vintage Stripe Test 3',
        description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ea modi soluta similique ut illo.',
        img: 'https://images.unsplash.com/photo-1594168087746-d94175b42394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
        audience: 'Female',
        type: 'Hat',
        price: 25.00,
        quantity: 0,
        priceID:''
      },
      productStore
    }
  },
  methods: {
    submitForm () {
      this.productStore.add(this.product)
      console.log(this.product)
    }
  }
}
</script>
