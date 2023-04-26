<template>
  <div class="relative shadow-xl product-card rounded-lg">
    <nuxt-link :to="`/products/${product.id}`">
      <img
        class="object-cover image rounded-lg shadow-xl shadow-slate-400 transition-all"
        :src="product.img"
        alt="image"
      />
      <div class=""></div>
    </nuxt-link>
    <div
      class="absolute-2 top-0 text-white font-bold bg-black bg-opacity-50 p-1 rounded-tl-md text-lg"
    >
      ${{ product.price }}
    </div>
    <div class="absolute z-20 w-full opacity-0 transition-opacity duration-300">
      <div class="text-white text-center">
        <h4
          class="text-xl text-yellow-100  text-shadow font-bold md:mt-10 md:mb-10 fire-effect-milo bg-black bg-opacity-50"
        >
          {{ product.title }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.checkOut-icon {
  width: 30px !important;
}
.fire-effect-milo {
  padding: 0 10px 0 0;
  width: 75%;
  border-right: 5px solid #fff;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  text-align: right;
  opacity: 1;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(0px, 0, 0);

  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    padding: 0 0px 0 0;
  }
  //when screen is 768px OR LESS
}
.product-card {
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
  width: 200px;
  height: 250px;

  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 8px;
  }
}

.product-card img {
  transition: all 1s ease-out !important;
  object-fit: cover;
  width: 200px;
  height: 250px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
}

.product-card .absolute {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateX(-50px);
  left: 45%;

  top: 50%;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    opacity: 90%;

    right: 0%;

    top: 0%;
  }
}
.product-card:hover .absolute {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  opacity: 1;
  transform: translateX(0px);
}
.product-card:hover img {
  transform: scale(1.1);
  transition: all 0.5s ease !important;

  //when screen is 768px OR LESS
  @media only screen and (min-width: 768px) {
    filter: brightness(80%);
    width: 300px;
  }
}
.product-card:hover .absolute-2 {
  transition: all 0.5s ease !important;

  opacity: 1;
  transform: translate(-10px, -12px);
}

.absolute-2 {
  position: absolute;
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
}
</style>
