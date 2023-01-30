/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCountOutputTypeSelect> = z
  .object({
    products: z.boolean().optional(),
  })
  .strict();

export const CartCountOutputTypeSelectObjectSchema = Schema;
