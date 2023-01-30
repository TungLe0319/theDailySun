/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './ProductsInCartsUncheckedCreateNestedManyWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    products: z
      .lazy(
        () =>
          ProductsInCartsUncheckedCreateNestedManyWithoutCartInputObjectSchema,
      )
      .optional(),
    userId: z.string().optional().nullable(),
  })
  .strict();

export const CartUncheckedCreateInputObjectSchema = Schema;
