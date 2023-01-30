/* eslint-disable */
import { z } from 'zod';
import { ProductCreateNestedOneWithoutCartsInputObjectSchema } from './ProductCreateNestedOneWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsCreateWithoutCartInput> = z
  .object({
    product: z
      .lazy(() => ProductCreateNestedOneWithoutCartsInputObjectSchema)
      .optional(),
    quantity: z.number(),
  })
  .strict();

export const ProductsInCartsCreateWithoutCartInputObjectSchema = Schema;
