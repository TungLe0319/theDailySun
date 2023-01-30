/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsSchema } from '../ProductsInCarts.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    img: z.boolean().optional(),
    stripe: z.boolean().optional(),
    productImg: z.boolean().optional(),
    type: z.boolean().optional(),
    audience: z.boolean().optional(),
    quantity: z.boolean().optional(),
    carts: z
      .union([z.boolean(), z.lazy(() => ProductsInCartsSchema.findMany)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ProductCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductSelectObjectSchema = Schema;
