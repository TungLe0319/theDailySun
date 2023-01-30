/* eslint-disable */
import { z } from 'zod';
import { ProductCreateNestedManyWithoutCartInputObjectSchema } from './ProductCreateNestedManyWithoutCartInput.schema';
import { UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateInput> = z
  .object({
    products: z
      .lazy(() => ProductCreateNestedManyWithoutCartInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartCreateInputObjectSchema = Schema;
