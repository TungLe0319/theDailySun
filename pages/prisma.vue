eslint-disable @typescript-eslint/no-unused-vars
<script setup lang="ts">

const { data: cart } = await useFetch("/api/cart");
// const { data: token } = useSession()
</script>

<template>
  <div class="mt-40">
    <p>{{ "are you logged in" }}</p>
    <button>button</button>
    <div v-if="cart">
      {{ cart }}
    </div>
  </div>
</template>
