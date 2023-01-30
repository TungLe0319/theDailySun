/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CartCountOrderByAggregateInputObjectSchema } from './CartCountOrderByAggregateInput.schema';
import { CartAvgOrderByAggregateInputObjectSchema } from './CartAvgOrderByAggregateInput.schema';
import { CartMaxOrderByAggregateInputObjectSchema } from './CartMaxOrderByAggregateInput.schema';
import { CartMinOrderByAggregateInputObjectSchema } from './CartMinOrderByAggregateInput.schema';
import { CartSumOrderByAggregateInputObjectSchema } from './CartSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => CartCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => CartAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CartMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CartMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CartSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CartOrderByWithAggregationInputObjectSchema = Schema;