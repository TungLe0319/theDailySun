/* eslint-disable */
import { z } from 'zod';
import { CartUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    cart: z
      .lazy(() => CartUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
