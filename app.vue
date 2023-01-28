<template>
  <div>
    <NGlobalStyle />
    <NavigationBar />
    <NuxtPage  />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
const { data, status } = useSession()
logger.log({ data: data.value, status: status.value })

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
