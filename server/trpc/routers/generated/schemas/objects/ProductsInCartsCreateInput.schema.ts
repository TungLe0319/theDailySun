/* eslint-disable */
import { z } from 'zod';
import { ProductCreateNestedOneWithoutCartsInputObjectSchema } from './ProductCreateNestedOneWithoutCartsInput.schema';
import { CartCreateNestedOneWithoutProductsInputObjectSchema } from './CartCreateNestedOneWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsCreateInput> = z
  .object({
    product: z
      .lazy(() => ProductCreateNestedOneWithoutCartsInputObjectSchema)
      .optional(),
    cart: z
      .lazy(() => CartCreateNestedOneWithoutProductsInputObjectSchema)
      .optional(),
    quantity: z.number(),
  })
  .strict();

export const ProductsInCartsCreateInputObjectSchema = Schema;
