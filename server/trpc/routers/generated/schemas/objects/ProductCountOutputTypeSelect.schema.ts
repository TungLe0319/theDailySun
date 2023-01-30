/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z
  .object({
    carts: z.boolean().optional(),
  })
  .strict();

export const ProductCountOutputTypeSelectObjectSchema = Schema;
