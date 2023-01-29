/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExampleCreateInput> = z
  .object({
    id: z.string().optional(),
    details: z.string(),
  })
  .strict();

export const ExampleCreateInputObjectSchema = Schema;
