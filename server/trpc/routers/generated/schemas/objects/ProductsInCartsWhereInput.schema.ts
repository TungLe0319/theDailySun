/* eslint-disable */
import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { CartRelationFilterObjectSchema } from './CartRelationFilter.schema';
import { CartWhereInputObjectSchema } from './CartWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductsInCartsWhereInputObjectSchema),
        z.lazy(() => ProductsInCartsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductsInCartsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductsInCartsWhereInputObjectSchema),
        z.lazy(() => ProductsInCartsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    cart: z
      .union([
        z.lazy(() => CartRelationFilterObjectSchema),
        z.lazy(() => CartWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    cartId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ProductsInCartsWhereInputObjectSchema = Schema;
