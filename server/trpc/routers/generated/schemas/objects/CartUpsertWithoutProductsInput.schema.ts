/* eslint-disable */
import { z } from 'zod';
import { CartUpdateWithoutProductsInputObjectSchema } from './CartUpdateWithoutProductsInput.schema';
import { CartUncheckedUpdateWithoutProductsInputObjectSchema } from './CartUncheckedUpdateWithoutProductsInput.schema';
import { CartCreateWithoutProductsInputObjectSchema } from './CartCreateWithoutProductsInput.schema';
import { CartUncheckedCreateWithoutProductsInputObjectSchema } from './CartUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpsertWithoutProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CartUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CartCreateWithoutProductsInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpsertWithoutProductsInputObjectSchema = Schema;
