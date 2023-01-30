/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './ProductsInCartsUncheckedCreateNestedManyWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    products: z
      .lazy(
        () =>
          ProductsInCartsUncheckedCreateNestedManyWithoutCartInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CartUncheckedCreateWithoutUserInputObjectSchema = Schema;
