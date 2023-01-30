/* eslint-disable */
import { z } from 'zod';
import { CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema';
import { CartCreateOrConnectWithoutUserInputObjectSchema } from './CartCreateOrConnectWithoutUserInput.schema';
import { CartUpsertWithoutUserInputObjectSchema } from './CartUpsertWithoutUserInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutUserInputObjectSchema } from './CartUpdateWithoutUserInput.schema';
import { CartUncheckedUpdateWithoutUserInputObjectSchema } from './CartUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CartCreateWithoutUserInputObjectSchema),
        z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CartCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => CartUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => CartWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CartUpdateWithoutUserInputObjectSchema),
        z.lazy(() => CartUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CartUpdateOneWithoutUserNestedInputObjectSchema = Schema;
