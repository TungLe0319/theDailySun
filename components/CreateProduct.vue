<template>
  <div>
    <form class="flex flex-col gap-4" @submit.prevent="submitForm">


<n-form-item label="Title">
<n-input v-model:value="product.title" type="text" placeholder="Title" />
</n-form-item>

<n-form-item label="Description">
    <n-input
      v-model:value="product.description"
      type="textarea"
      placeholder="Description"
    />
</n-form-item>



<n-form-item label="Img">
<n-input v-model:value="product.img" type="url" placeholder="Url" />
</n-form-item>

<n-select :style="{ width: '33%' }" :options="audience" />
<n-select :style="{ width: '33%' }" :options="type" />
 <n-input
      type="text"
      :allow-input="onlyAllowNumber"
      placeholder="Only allow number"
      v-model:value="product.price"
      :style="{ width: '33%' }"
    />


      <!-- <div class="  ">
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
      </div> -->
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam molestiae voluptatem voluptates porro recusandae necessitatibus incidunt veritatis quis consequatur minus! Voluptates, nihil mollitia. Tempora perferendis porro modi corporis dolores velit quia quasi? Labore itaque dolor illum vel eum animi atque! Corporis maxime distinctio, voluptas ipsum neque quibusdam numquam quam deleniti molestiae ratione, quis exercitationem architecto? Adipisci voluptas fugiat facere quae atque quaerat et rerum quis recusandae consequuntur eum laudantium reprehenderit excepturi qui quia explicabo delectus amet aliquam, in libero autem. Laudantium assumenda voluptates, incidunt, minima dicta laborum corporis odio nisi vitae vel hic reiciendis eos rerum, iure pariatur a eveniet?
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
        title: "Gents Transparent Frames",
        description: "Introducing our stylish and versatile female hat, perfect for any season and occasion. Made with high-quality materials, this hat features a classic design with a comfortable fit. Whether you're running errands, going to the beach, or simply adding a touch of flair to your outfit, this hat is the perfect accessory. Its lightweight and breathable fabric makes it ideal for all-day wear, while the adjustable strap ensures a custom fit for maximum comfort. Available in a variety of colors, this hat is the perfect addition to your wardrobe, making it easy to express your personal style. Order yours today and experience the ultimate in style, comfort, and convenience!",
        img: 'https://images.unsplash.com/photo-1610319471440-04c408a19b3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        audience: 'Male',
        type: 'Glasses',
        price: 22.00,
        quantity: 0,
        priceID:''
      },
      productStore,


      audience: ref([
        {
          label: 'Female',
          value: 'Female'
        },
          {
          label: 'Male',
          value: 'Male'
        },
      ]),
        type: ref([
        {
          label: 'Hat',
          value: 'Hat'
        },
          {
          label: 'Glasses',
          value: 'Glasses'
        },
      ]),
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
