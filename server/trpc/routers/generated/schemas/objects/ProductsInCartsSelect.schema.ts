/* eslint-disable */
import { z } from 'zod';
import { ProductArgsObjectSchema } from './ProductArgs.schema';
import { CartArgsObjectSchema } from './CartArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsSelect> = z
  .object({
    id: z.boolean().optional(),
    product: z
      .union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)])
      .optional(),
    productId: z.boolean().optional(),
    cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
    cartId: z.boolean().optional(),
    quantity: z.boolean().optional(),
  })
  .strict();

export const ProductsInCartsSelectObjectSchema = Schema;
