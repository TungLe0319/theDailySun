/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsUpdateManyWithoutCartNestedInputObjectSchema } from './ProductsInCartsUpdateManyWithoutCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutUserInput> = z
  .object({
    products: z
      .lazy(() => ProductsInCartsUpdateManyWithoutCartNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUpdateWithoutUserInputObjectSchema = Schema;
