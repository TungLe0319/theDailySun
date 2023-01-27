class ProductsService {
  addProduct (hi) {
    const dog = hi
    logger.log(dog)
  }

   async getProducts(){
        const { data: products } =  await  useFetch('/api/products/all')

        AppState.products = products.value
        logger.log(AppState.products)
  }
}
export const productsService = new ProductsService()
