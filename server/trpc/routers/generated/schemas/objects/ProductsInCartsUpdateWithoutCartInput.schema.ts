/* eslint-disable */
import { z } from 'zod';
import { ProductUpdateOneWithoutCartsNestedInputObjectSchema } from './ProductUpdateOneWithoutCartsNestedInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUpdateWithoutCartInput> = z
  .object({
    product: z
      .lazy(() => ProductUpdateOneWithoutCartsNestedInputObjectSchema)
      .optional(),
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductsInCartsUpdateWithoutCartInputObjectSchema = Schema;
