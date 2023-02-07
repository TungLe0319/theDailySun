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
        title: 'Sleek Amber',
        description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ea modi soluta similique ut illo.',
        img: 'https://images.unsplash.com/photo-1535402084477-449642d07347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
        audience: 'Female',
        type: 'Glasses',
        price: 18.00,
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
