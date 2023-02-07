<template>
  <div>
    <div >
      <HeroImage  />
      <AboutUs />
      <FeaturedProducts  />
      <MenFeaturedProducts />
    </div>

  </div>
</template>


<script>

export default {
  setup () {

    let isLoading = true

    return {
      isLoading,

    }
  }
}
</script>
