/* eslint-disable */
import { z } from 'zod';
import { CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema';
import { CartCreateOrConnectWithoutUserInputObjectSchema } from './CartCreateOrConnectWithoutUserInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateNestedOneWithoutUserInput> = z
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
    connect: z.lazy(() => CartWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CartCreateNestedOneWithoutUserInputObjectSchema = Schema;
