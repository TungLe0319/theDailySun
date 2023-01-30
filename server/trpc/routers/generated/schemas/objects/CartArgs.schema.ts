/* eslint-disable */
import { z } from 'zod';
import { CartSelectObjectSchema } from './CartSelect.schema';
import { CartIncludeObjectSchema } from './CartInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartArgs> = z
  .object({
    select: z.lazy(() => CartSelectObjectSchema).optional(),
    include: z.lazy(() => CartIncludeObjectSchema).optional(),
  })
  .strict();

export const CartArgsObjectSchema = Schema;
