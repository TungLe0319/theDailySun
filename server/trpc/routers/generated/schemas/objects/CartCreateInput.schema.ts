/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsCreateNestedManyWithoutCartInputObjectSchema } from './ProductsInCartsCreateNestedManyWithoutCartInput.schema';
import { UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateInput> = z
  .object({
    products: z
      .lazy(() => ProductsInCartsCreateNestedManyWithoutCartInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartCreateInputObjectSchema = Schema;
