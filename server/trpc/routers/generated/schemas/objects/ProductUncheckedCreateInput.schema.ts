/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductsInCartsUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    price: z.number(),
    img: z.string(),
    stripe: z.string(),
    productImg: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    audience: z.string().optional().nullable(),
    quantity: z.number().optional().nullable(),
    carts: z
      .lazy(
        () =>
          ProductsInCartsUncheckedCreateNestedManyWithoutProductInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateInputObjectSchema = Schema;
