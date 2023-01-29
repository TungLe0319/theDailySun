/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExampleCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    details: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ExampleCountAggregateInputObjectSchema = Schema;
