/* eslint-disable */
import { z } from 'zod';
import { CartCreateNestedOneWithoutProductsInputObjectSchema } from './CartCreateNestedOneWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsCreateWithoutProductInput> = z
  .object({
    cart: z
      .lazy(() => CartCreateNestedOneWithoutProductsInputObjectSchema)
      .optional(),
    quantity: z.number(),
  })
  .strict();

export const ProductsInCartsCreateWithoutProductInputObjectSchema = Schema;
