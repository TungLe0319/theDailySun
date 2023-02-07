<template>
  <div class="   text-center">
    <a :href="`/products/${receipt.url}`" >

      View Receipt

<img src="https://cdn-icons-png.flaticon.com/512/3753/3753033.png" alt="Receipt Icon" width="150">
    </a>

        <h4 class=" my-2 text-xl text-shadow font-bold  ">
          #{{ receipt.receiptNumber }}
        </h4>

  </div>
</template>

<script>
export default {
  props: {
    receipt: { type: Object, required: true }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
