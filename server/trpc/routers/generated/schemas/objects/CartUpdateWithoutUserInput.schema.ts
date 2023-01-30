/* eslint-disable */
import { z } from 'zod';
import { ProductUpdateManyWithoutCartNestedInputObjectSchema } from './ProductUpdateManyWithoutCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutUserInput> = z
  .object({
    products: z
      .lazy(() => ProductUpdateManyWithoutCartNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUpdateWithoutUserInputObjectSchema = Schema;
