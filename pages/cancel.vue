<template>
  <div>
    <div class="relative  hero-image">
      <img  src="https://images.unsplash.com/photo-1525275295302-38fe248cf44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80" alt="hero image">
      <div class="hero-text">
        <h1 class=" text-8xl text-shadow-overlay">
        CANCELLED ORDER
        </h1>

      </div>
    </div>

  </div>
</template>e>

<script>
export default {
  setup () {
    onMounted(() => {

    })

    return {

    }
  }
}
</script>

<style>


.hero-image{
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1525275295302-38fe248cf44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
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
