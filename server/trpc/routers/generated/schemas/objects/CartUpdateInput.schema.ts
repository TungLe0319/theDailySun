/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsUpdateManyWithoutCartNestedInputObjectSchema } from './ProductsInCartsUpdateManyWithoutCartNestedInput.schema';
import { UserUpdateOneWithoutCartNestedInputObjectSchema } from './UserUpdateOneWithoutCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateInput> = z
  .object({
    products: z
      .lazy(() => ProductsInCartsUpdateManyWithoutCartNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneWithoutCartNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUpdateInputObjectSchema = Schema;
