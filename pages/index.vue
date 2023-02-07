<template>
  <div>
    <div :class="products? ' block ' : ' hidden'">
      <HeroImage class=" " />
      <AboutUs />

      <FeaturedProducts class="" />
      <MenFeaturedProducts />
    </div>
    <!-- <div >
      <LoadingAnimation />
    </div> -->
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
