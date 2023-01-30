/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CartOrderByWithRelationInputObjectSchema } from './CartOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    cart: z.lazy(() => CartOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
