/* eslint-disable */
import { z } from 'zod';
import { CartUpdateOneWithoutProductsNestedInputObjectSchema } from './CartUpdateOneWithoutProductsNestedInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUpdateWithoutProductInput> = z
  .object({
    cart: z
      .lazy(() => CartUpdateOneWithoutProductsNestedInputObjectSchema)
      .optional(),
    quantity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductsInCartsUpdateWithoutProductInputObjectSchema = Schema;
