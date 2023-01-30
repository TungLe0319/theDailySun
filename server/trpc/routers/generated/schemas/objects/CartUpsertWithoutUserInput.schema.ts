/* eslint-disable */
import { z } from 'zod';
import { CartUpdateWithoutUserInputObjectSchema } from './CartUpdateWithoutUserInput.schema';
import { CartUncheckedUpdateWithoutUserInputObjectSchema } from './CartUncheckedUpdateWithoutUserInput.schema';
import { CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => CartUpdateWithoutUserInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CartCreateWithoutUserInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpsertWithoutUserInputObjectSchema = Schema;
