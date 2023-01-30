/* eslint-disable */
import { z } from 'zod';
import { ProductUpdateOneWithoutCartsNestedInputObjectSchema } from './ProductUpdateOneWithoutCartsNestedInput.schema';
import { CartUpdateOneWithoutProductsNestedInputObjectSchema } from './CartUpdateOneWithoutProductsNestedInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUpdateInput> = z
  .object({
    product: z
      .lazy(() => ProductUpdateOneWithoutCartsNestedInputObjectSchema)
      .optional(),
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

export const ProductsInCartsUpdateInputObjectSchema = Schema;
