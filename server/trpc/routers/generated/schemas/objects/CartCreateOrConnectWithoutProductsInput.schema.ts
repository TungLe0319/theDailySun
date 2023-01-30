/* eslint-disable */
import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartCreateWithoutProductsInputObjectSchema } from './CartCreateWithoutProductsInput.schema';
import { CartUncheckedCreateWithoutProductsInputObjectSchema } from './CartUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateOrConnectWithoutProductsInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CartCreateWithoutProductsInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const CartCreateOrConnectWithoutProductsInputObjectSchema = Schema;
