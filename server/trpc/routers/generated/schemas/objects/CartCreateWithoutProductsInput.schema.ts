/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateWithoutProductsInput> = z
  .object({
    id: z.string().optional(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartCreateWithoutProductsInputObjectSchema = Schema;
