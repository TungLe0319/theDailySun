
export interface Product {
  id :         Number
  title:       String
  description: String
  price  :     Number
  img   :      String
  stripe  :    String
  productImg : String
  type  :      String
  audience:   String
  cartId  :    Number

}

interface ProductState {
  items: Record<string, Product>;
  ids: number[];
}

export const useProductStore = defineStore({
  id: "products",

  state: (): ProductState => ({
    items: {},
    ids: [],
  }),

  getters: {
    list(): Product[] {
      return this.ids.map((i) => this.items[i]);
    },

    loaded(): boolean {
      return this.ids.length > 0;
    },
  },

  actions: {
    async fetchAll() {
      if (this.loaded) return;

      const res = await useFetch('/api/products');
      logger.log(res.data.value)
 let data = res.data.value



    if (Array.isArray(data)) {
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    }

    },
  },
});
