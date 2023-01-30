/* eslint-disable */
import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CartCreateWithoutUserInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CartCreateOrConnectWithoutUserInputObjectSchema = Schema;
