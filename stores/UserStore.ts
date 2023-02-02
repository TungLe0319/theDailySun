// import { acceptHMRUpdate } from "pinia";

// export const useUserStore = defineStore("user", {
//   state: () => ({
//     user:null
//   }),
//   actions: {
//     getUser() {
//      const {data} = useSession()
//       logger.log(cart.value);
//       this.cart = cart.value?.cart;
//       this.total = cart.value?.cartTotal;
//       this.products = cart.value?.cart?.products;
//     },

//   },

// });




export const useUserStore = () => {
  const { data } = useSession();

  const state = reactive({
    user: readonly(data.value?.user),
  });

  return { ...toRefs(state) };
};

export default useUserStore;
