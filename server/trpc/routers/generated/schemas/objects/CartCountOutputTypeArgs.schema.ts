/* eslint-disable */
import { z } from 'zod';
import { CartCountOutputTypeSelectObjectSchema } from './CartCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => CartCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const CartCountOutputTypeArgsObjectSchema = Schema;
