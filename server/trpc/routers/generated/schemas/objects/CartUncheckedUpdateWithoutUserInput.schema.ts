/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutCartNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedUpdateWithoutUserInput> = z
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
  })
  .strict();

export const CartUncheckedUpdateWithoutUserInputObjectSchema = Schema;
