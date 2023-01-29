/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExampleMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    details: z.literal(true).optional(),
  })
  .strict();

export const ExampleMaxAggregateInputObjectSchema = Schema;
