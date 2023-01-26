<script setup lang="ts">
const { data: products } = useFetch('/api/products')
</script>

<template>
  <div>
    <p>Prisma ORM Data from the database, received {{ products }} records: <pre>{{ products }}</pre></p>
  </div>
</template>
