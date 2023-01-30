/* eslint-disable */
import { z } from 'zod';
import { CartWhereInputObjectSchema } from './CartWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartRelationFilter> = z
  .object({
    is: z
      .lazy(() => CartWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => CartWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CartRelationFilterObjectSchema = Schema;
