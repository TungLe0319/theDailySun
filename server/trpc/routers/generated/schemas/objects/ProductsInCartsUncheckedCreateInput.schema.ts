/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    productId: z.number(),
    cartId: z.number(),
    quantity: z.number(),
  })
  .strict();

export const ProductsInCartsUncheckedCreateInputObjectSchema = Schema;
