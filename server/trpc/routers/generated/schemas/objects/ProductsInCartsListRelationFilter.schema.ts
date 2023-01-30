/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsWhereInputObjectSchema } from './ProductsInCartsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsListRelationFilter> = z
  .object({
    every: z.lazy(() => ProductsInCartsWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProductsInCartsWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProductsInCartsWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProductsInCartsListRelationFilterObjectSchema = Schema;
