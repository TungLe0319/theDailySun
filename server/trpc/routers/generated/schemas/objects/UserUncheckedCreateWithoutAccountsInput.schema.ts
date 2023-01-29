/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
  })
  .strict();

export const UserUncheckedCreateWithoutAccountsInputObjectSchema = Schema;
