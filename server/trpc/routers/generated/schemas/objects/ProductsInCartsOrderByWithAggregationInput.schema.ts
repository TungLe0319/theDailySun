/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductsInCartsCountOrderByAggregateInputObjectSchema } from './ProductsInCartsCountOrderByAggregateInput.schema';
import { ProductsInCartsAvgOrderByAggregateInputObjectSchema } from './ProductsInCartsAvgOrderByAggregateInput.schema';
import { ProductsInCartsMaxOrderByAggregateInputObjectSchema } from './ProductsInCartsMaxOrderByAggregateInput.schema';
import { ProductsInCartsMinOrderByAggregateInputObjectSchema } from './ProductsInCartsMinOrderByAggregateInput.schema';
import { ProductsInCartsSumOrderByAggregateInputObjectSchema } from './ProductsInCartsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    cartId: z.lazy(() => SortOrderSchema).optional(),
    quantity: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductsInCartsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ProductsInCartsAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProductsInCartsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProductsInCartsMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ProductsInCartsSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductsInCartsOrderByWithAggregationInputObjectSchema = Schema;
