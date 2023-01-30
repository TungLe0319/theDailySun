/* eslint-disable */
import { z } from 'zod';
import { UserUpdateOneWithoutCartNestedInputObjectSchema } from './UserUpdateOneWithoutCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutProductsInput> = z
  .object({
    user: z
      .lazy(() => UserUpdateOneWithoutCartNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUpdateWithoutProductsInputObjectSchema = Schema;
