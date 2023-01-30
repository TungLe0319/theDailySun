/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    price: z.literal(true).optional(),
    img: z.literal(true).optional(),
    stripe: z.literal(true).optional(),
    productImg: z.literal(true).optional(),
    type: z.literal(true).optional(),
    audience: z.literal(true).optional(),
    quantity: z.literal(true).optional(),
    cartId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ProductCountAggregateInputObjectSchema = Schema;
