/* eslint-disable */
import { z } from 'zod';
import { CartCreateNestedOneWithoutUserInputObjectSchema } from './CartCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    cart: z
      .lazy(() => CartCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutAccountsInputObjectSchema = Schema;
