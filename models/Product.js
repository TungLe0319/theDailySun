export class Product {
  constructor (data) {
    this.id = data.id
    this.title = data.attributes.title
    this.img = data.attributes.img
    this.price = data.attributes.Price
    this.description = data.attributes.Description
  }
}
