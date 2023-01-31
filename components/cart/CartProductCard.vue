<template>
   <div class="p-5 rounded-md my-4 flex justify-between product-card  transition-colors  " >
  <div class="card flex">
    <img   :src="product.img ||'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'" alt="Product Image" class="product-image shadow-lg shadow-slate-400" >
    <div class="ml-4">
<h1 class="text-lg">{{product.title}}</h1>
<h2 class="text-md font-bold text-gray-600">{{product.audience}}</h2>
<RemoveFromCart :product="product" />
    </div>
  </div>
    <div class="flex    gap-x-20">
    <p>product.Qty</p>
    <p>${{product.price}}</p>


  </div>
</div>

</template>


<script>
import RemoveFromCart from "./RemoveFromCart.vue";




export default {
    props: {
        product: { type: Object, required: false }
    },
    setup() {
        return {};
    },
    components: { RemoveFromCart }
}
</script>

<style lang="scss" scoped>
.product-image{
  height: 250px;
  width: 175px;
  object-fit: cover;

border-radius: 8px;
}
.product-card:hover{
transition: all 0.5 ease !important;
 background-color: rgb(148 163 184 );
img{
   --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.658), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
}
.product-card{
transition: all 0.5 ease !important;
}

</style>
