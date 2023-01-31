import Pop from './Pop'
const { $trpc: trpc } = useNuxtApp()
class ProductsService {
  //
  async getProductById (id) {
    try {
      const product = await trpc.product.findUnique.useQuery({ where: { id } })
      return product
    } catch (error) {
      Pop.log(error)
    }
  }

  async addProduct (productData) {
    try {
      // const product = await trpc.product.create.mutate()
    } catch (error) {
      Pop.error(error)
    }
  }
}
export const productsService = new ProductsService()
