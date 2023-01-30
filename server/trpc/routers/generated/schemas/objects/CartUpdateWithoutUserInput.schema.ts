/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutCartNestedInputObjectSchema } from './ProductUpdateManyWithoutCartNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutUserInput> = z
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
  })
  .strict();

export const CartUpdateWithoutUserInputObjectSchema = Schema;
