/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutCartNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutCartNestedInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    products: z
      .lazy(() => ProductUncheckedUpdateManyWithoutCartNestedInputObjectSchema)
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const CartUncheckedUpdateInputObjectSchema = Schema;
