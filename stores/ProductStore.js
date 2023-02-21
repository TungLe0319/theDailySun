// import { Product } from "@prisma/client";

// interface ProductState {
//   items: Record<string, Product>;
//   ids: number[];
// }

// export const useProductStore = defineStore({
//   id: "products",

//   state: (): ProductState => ({
//     items: {},
//     ids: [],
//     activeProduct:{}
//   }),

//   getters: {
//     list(): Product[] {
//       return this.ids.map((i) => this.items[i]);
//     },

//     loaded(): boolean {
//       return this.ids.length > 0;
//     },
//   },

//   actions: {
//     async fetchAll() {
//       if (this.loaded) return;

//       const res = await useFetch('/api/products');
//       logger.log(res.data.value)
//  let data = res.data.value

//     if (Array.isArray(data)) {

//       this.ids = data

//       .map((product) => {

//         this.items[product.id] = product;

//         return product.id;
//       });
//     }

//     },
//   },
// });

import { acceptHMRUpdate } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    activeProduct: {},
  }),
  actions: {
    async getProducts() {
      const headers = useRequestHeaders(["cookie"]);
      const { data: products } = await useFetch("/api/products", { headers });
      this.products = products.value;
    },
    async getProductById(id) {
      const { data: product } = await useFetch(`/api/products/${id}`);
      this.activeProduct = product.value;
    },
    async add(productData) {
      const { data: product } = await useFetch("/api/products", {
        method: "POST",
        body: {
          productData,
        },
      });
      this.products = [product.value, ...this.products];
    },
    async delete(productIds) {
      const deleted = await useFetch("/api/products/:id", {
        method: "DELETE",
        body: {
          productIds,
        },
      });

      logger.log(deleted.data.value);
      navigateTo("http://localhost:3000", { external: true });
    },
  },
  getters: {},
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
