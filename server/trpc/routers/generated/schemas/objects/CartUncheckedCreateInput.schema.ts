/* eslint-disable */
import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    products: z
      .lazy(() => ProductUncheckedCreateNestedManyWithoutCartInputObjectSchema)
      .optional(),
    userId: z.string().optional().nullable(),
  })
  .strict();

export const CartUncheckedCreateInputObjectSchema = Schema;
