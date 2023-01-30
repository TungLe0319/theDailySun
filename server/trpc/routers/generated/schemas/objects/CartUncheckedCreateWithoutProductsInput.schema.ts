/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateWithoutProductsInput> = z
  .object({
    id: z.number().optional(),
    userId: z.string().optional().nullable(),
  })
  .strict();

export const CartUncheckedCreateWithoutProductsInputObjectSchema = Schema;
