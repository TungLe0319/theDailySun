<template>
  <div class="mt-18">
   <h1>SUCCESS</h1>
  </div>
</template>

<script setup lang="ts">

</script>

<style>

.profile-image{
 top: 80%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 99999 !important;
}
.hero-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: #fff;
}

.text-shadow-overlay {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

</style>
