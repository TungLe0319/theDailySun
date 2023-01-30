/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateManyMutationInput> = z
  .object({})
  .strict();

export const CartUpdateManyMutationInputObjectSchema = Schema;
