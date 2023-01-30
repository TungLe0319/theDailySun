/* eslint-disable */
import { z } from 'zod';
import { CartCreateWithoutProductsInputObjectSchema } from './CartCreateWithoutProductsInput.schema';
import { CartUncheckedCreateWithoutProductsInputObjectSchema } from './CartUncheckedCreateWithoutProductsInput.schema';
import { CartCreateOrConnectWithoutProductsInputObjectSchema } from './CartCreateOrConnectWithoutProductsInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateNestedOneWithoutProductsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CartCreateWithoutProductsInputObjectSchema),
        z.lazy(() => CartUncheckedCreateWithoutProductsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CartCreateOrConnectWithoutProductsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CartWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CartCreateNestedOneWithoutProductsInputObjectSchema = Schema;
