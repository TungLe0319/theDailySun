/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCartNestedInputObjectSchema } from './UserUpdateOneWithoutCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutProductsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneWithoutCartNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUpdateWithoutProductsInputObjectSchema = Schema;
