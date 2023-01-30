/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const ProductsInCartsWhereUniqueInputObjectSchema = Schema;
