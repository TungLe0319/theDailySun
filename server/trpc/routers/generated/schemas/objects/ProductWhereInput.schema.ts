/* eslint-disable */
import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { CartRelationFilterObjectSchema } from './CartRelationFilter.schema';
import { CartWhereInputObjectSchema } from './CartWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    img: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    stripe: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    productImg: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    type: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    audience: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    cart: z
      .union([
        z.lazy(() => CartRelationFilterObjectSchema),
        z.lazy(() => CartWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    cartId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const ProductWhereInputObjectSchema = Schema;
