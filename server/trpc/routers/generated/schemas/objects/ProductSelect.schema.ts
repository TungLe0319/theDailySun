/* eslint-disable */
import { z } from 'zod';
import { CartArgsObjectSchema } from './CartArgs.schema';

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
    cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
    cartId: z.boolean().optional(),
  })
  .strict();

export const ProductSelectObjectSchema = Schema;
