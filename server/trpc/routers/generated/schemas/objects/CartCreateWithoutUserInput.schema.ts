/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsCreateNestedManyWithoutCartInputObjectSchema } from './ProductsInCartsCreateNestedManyWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateWithoutUserInput> = z
  .object({
    products: z
      .lazy(() => ProductsInCartsCreateNestedManyWithoutCartInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartCreateWithoutUserInputObjectSchema = Schema;
