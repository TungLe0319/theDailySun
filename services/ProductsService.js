 class ProductsService {
async all(){
        const res = await useFetch("/api/products/all");
       console.log(res.data);
}
 }
 const productsService = new ProductsService()
