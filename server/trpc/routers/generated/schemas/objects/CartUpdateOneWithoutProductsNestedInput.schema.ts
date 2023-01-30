/* eslint-disable */
import { z } from 'zod';
import { CartCreateWithoutProductsInputObjectSchema } from './CartCreateWithoutProductsInput.schema';
import { CartUncheckedCreateWithoutProductsInputObjectSchema } from './CartUncheckedCreateWithoutProductsInput.schema';
import { CartCreateOrConnectWithoutProductsInputObjectSchema } from './CartCreateOrConnectWithoutProductsInput.schema';
import { CartUpsertWithoutProductsInputObjectSchema } from './CartUpsertWithoutProductsInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutProductsInputObjectSchema } from './CartUpdateWithoutProductsInput.schema';
import { CartUncheckedUpdateWithoutProductsInputObjectSchema } from './CartUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateOneWithoutProductsNestedInput> = z
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
    upsert: z.lazy(() => CartUpsertWithoutProductsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => CartWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CartUpdateWithoutProductsInputObjectSchema),
        z.lazy(() => CartUncheckedUpdateWithoutProductsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CartUpdateOneWithoutProductsNestedInputObjectSchema = Schema;
