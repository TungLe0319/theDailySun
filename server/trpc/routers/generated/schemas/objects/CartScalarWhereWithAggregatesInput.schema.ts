/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CartScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const CartScalarWhereWithAggregatesInputObjectSchema = Schema;
