/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsCreateManyProductInput> = z
  .object({
    id: z.number().optional(),
    cartId: z.number(),
    quantity: z.number(),
  })
  .strict();

export const ProductsInCartsCreateManyProductInputObjectSchema = Schema;
