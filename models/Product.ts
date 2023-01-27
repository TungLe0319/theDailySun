export class Product {
  id: Number
  title: String
  img: String
  price: Number
  description: String
  constructor (data: any) {
    this.id = data.id
    this.title = data.attributes.title
    this.img = data.attributes.img
    this.price = data.attributes.Price
    this.description = data.attributes.Description
  }
}
