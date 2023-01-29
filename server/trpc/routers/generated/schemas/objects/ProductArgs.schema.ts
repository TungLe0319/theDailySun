/* eslint-disable */
import { z } from 'zod';
import { ProductSelectObjectSchema } from './ProductSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductArgs> = z
  .object({
    select: z.lazy(() => ProductSelectObjectSchema).optional(),
  })
  .strict();

export const ProductArgsObjectSchema = Schema;
