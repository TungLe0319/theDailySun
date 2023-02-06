




  import { StripeCheckout } from "@vue-stripe/vue-stripe";
  export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("StripeCheckout", StripeCheckout);
  });

