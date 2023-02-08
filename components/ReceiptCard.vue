<template>
  <div class=" my-5  text-center receipt">
  <h1 class="text my-2">  View Receipt</h1>
    <a :href="`${receipt.url}`" target="_blank"  >


<img src="https://cdn-icons-png.flaticon.com/512/3753/3753033.png" alt="Receipt Icon" width="150">
    </a>


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
.receipt{
  transition: all 0.5s ease;
    .text{
    opacity: 0;
      transition: all 0.5s ease;
  }
}
.receipt:hover{
  transition: all 0.5s ease;
  transform: scale(1.1);
  filter: brightness(90%);
  .text{
    opacity: 1;
      transition: all 0.5s ease;
  }
}
</style>
