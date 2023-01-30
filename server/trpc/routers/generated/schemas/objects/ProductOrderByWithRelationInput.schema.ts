/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductsInCartsOrderByRelationAggregateInputObjectSchema } from './ProductsInCartsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    img: z.lazy(() => SortOrderSchema).optional(),
    stripe: z.lazy(() => SortOrderSchema).optional(),
    productImg: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    audience: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    carts: z
      .lazy(() => ProductsInCartsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;
