/* eslint-disable */
import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    products: z
      .lazy(() => ProductUncheckedCreateNestedManyWithoutCartInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUncheckedCreateWithoutUserInputObjectSchema = Schema;
