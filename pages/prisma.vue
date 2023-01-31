<script setup lang="ts">
const headers = useRequestHeaders(['cookie']) as HeadersInit
const { data: token } = await useFetch('/api/token', { headers })
</script>

<template>
  <div class=" mt-60">
    <p>{{ token || 'are you logged in' }}</p>
  </div>
</template>
