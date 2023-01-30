/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    cartId: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
  })
  .strict();

export const ProductsInCartsAvgAggregateInputObjectSchema = Schema;
