/* eslint-disable */
import { z } from 'zod';
import { ProductCreateNestedManyWithoutCartInputObjectSchema } from './ProductCreateNestedManyWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutCartInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartCreateWithoutUserInputObjectSchema = Schema;
