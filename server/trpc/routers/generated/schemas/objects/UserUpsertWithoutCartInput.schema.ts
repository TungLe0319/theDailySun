/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutCartInputObjectSchema } from './UserUpdateWithoutCartInput.schema';
import { UserUncheckedUpdateWithoutCartInputObjectSchema } from './UserUncheckedUpdateWithoutCartInput.schema';
import { UserCreateWithoutCartInputObjectSchema } from './UserCreateWithoutCartInput.schema';
import { UserUncheckedCreateWithoutCartInputObjectSchema } from './UserUncheckedCreateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutCartInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCartInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCartInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCartInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCartInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutCartInputObjectSchema = Schema;
