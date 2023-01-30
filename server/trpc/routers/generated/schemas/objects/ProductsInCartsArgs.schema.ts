/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsSelectObjectSchema } from './ProductsInCartsSelect.schema';
import { ProductsInCartsIncludeObjectSchema } from './ProductsInCartsInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsArgs> = z
  .object({
    select: z.lazy(() => ProductsInCartsSelectObjectSchema).optional(),
    include: z.lazy(() => ProductsInCartsIncludeObjectSchema).optional(),
  })
  .strict();

export const ProductsInCartsArgsObjectSchema = Schema;
