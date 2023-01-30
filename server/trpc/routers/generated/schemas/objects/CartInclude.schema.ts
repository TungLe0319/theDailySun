/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsSchema } from '../ProductsInCarts.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { CartCountOutputTypeArgsObjectSchema } from './CartCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartInclude> = z
  .object({
    products: z
      .union([z.boolean(), z.lazy(() => ProductsInCartsSchema.findMany)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => CartCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const CartIncludeObjectSchema = Schema;