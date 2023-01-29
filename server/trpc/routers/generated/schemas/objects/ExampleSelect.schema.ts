/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExampleSelect> = z
  .object({
    id: z.boolean().optional(),
    details: z.boolean().optional(),
  })
  .strict();

export const ExampleSelectObjectSchema = Schema;
