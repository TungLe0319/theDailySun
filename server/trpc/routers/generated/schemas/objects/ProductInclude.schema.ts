/* eslint-disable */
import { z } from 'zod';
import { CartArgsObjectSchema } from './CartArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductInclude> = z
  .object({
    cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  })
  .strict();

export const ProductIncludeObjectSchema = Schema;
