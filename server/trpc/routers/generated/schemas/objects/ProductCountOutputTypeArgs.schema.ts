/* eslint-disable */
import { z } from 'zod';
import { ProductCountOutputTypeSelectObjectSchema } from './ProductCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ProductCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ProductCountOutputTypeArgsObjectSchema = Schema;
