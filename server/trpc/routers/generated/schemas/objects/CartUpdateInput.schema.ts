/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutCartNestedInputObjectSchema } from './ProductUpdateManyWithoutCartNestedInput.schema';
import { UserUpdateOneWithoutCartNestedInputObjectSchema } from './UserUpdateOneWithoutCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    products: z
      .lazy(() => ProductUpdateManyWithoutCartNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneWithoutCartNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUpdateInputObjectSchema = Schema;
