/* eslint-disable */
import { z } from 'zod';
import { ProductArgsObjectSchema } from './ProductArgs.schema';
import { CartArgsObjectSchema } from './CartArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsInclude> = z
  .object({
    product: z
      .union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)])
      .optional(),
    cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  })
  .strict();

export const ProductsInCartsIncludeObjectSchema = Schema;
