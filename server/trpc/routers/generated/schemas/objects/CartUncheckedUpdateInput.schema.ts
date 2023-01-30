/* eslint-disable */
import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductsInCartsUncheckedUpdateManyWithoutCartNestedInputObjectSchema } from './ProductsInCartsUncheckedUpdateManyWithoutCartNestedInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    products: z
      .lazy(
        () =>
          ProductsInCartsUncheckedUpdateManyWithoutCartNestedInputObjectSchema,
      )
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
