<template>
  <div>
    <NGlobalStyle />
    <NavigationBar />
    <NuxtPage />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
// import { darkTheme } from 'naive-ui'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
</style>
