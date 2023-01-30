/* eslint-disable */
import { ExampleSchema } from './Example.schema';
import { PostSchema } from './Post.schema';
import { UserSchema } from './User.schema';
import { ProductSchema } from './Product.schema';
import { CartSchema } from './Cart.schema';
import { ProductsInCartsSchema } from './ProductsInCarts.schema';

const schemas = {
  Example: ExampleSchema,
  Post: PostSchema,
  User: UserSchema,
  Product: ProductSchema,
  Cart: CartSchema,
  ProductsInCarts: ProductsInCartsSchema,
};

export default schemas;