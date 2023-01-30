/* eslint-disable */
import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductsInCartsUncheckedUpdateManyWithoutCartNestedInputObjectSchema } from './ProductsInCartsUncheckedUpdateManyWithoutCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedUpdateWithoutUserInput> = z
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
  })
  .strict();

export const CartUncheckedUpdateWithoutUserInputObjectSchema = Schema;
