// import { Prisma } from '@prisma/client'

class ProductsService {
  async addProduct (productData) {
    const { data: products } = await useFetch('/api/products', {
      method: 'POST',
      body: productData
    })
    logger.log(products)
  }

  async getProducts () {
    const { data: products } = await useFetch('/api/products/all')

    AppState.products = products.value
    logger.log(AppState.products)
  }

  async getProductById (id) {
    const { data: product } = await useFetch(`/api/products/${id}`)

    logger.log(product.value)
    AppState.activeProduct = product.value
    // console.log(AppState.activeProduct);
  }
}
export const productsService = new ProductsService()
