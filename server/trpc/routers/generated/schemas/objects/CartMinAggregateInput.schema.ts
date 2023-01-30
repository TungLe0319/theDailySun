/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const CartMinAggregateInputObjectSchema = Schema;
