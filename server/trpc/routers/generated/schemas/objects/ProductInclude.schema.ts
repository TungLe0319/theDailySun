/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsSchema } from '../ProductsInCarts.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductInclude> = z
  .object({
    carts: z
      .union([z.boolean(), z.lazy(() => ProductsInCartsSchema.findMany)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ProductCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductIncludeObjectSchema = Schema;
