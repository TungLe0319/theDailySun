/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCartInputObjectSchema } from './UserCreateWithoutCartInput.schema';
import { UserUncheckedCreateWithoutCartInputObjectSchema } from './UserUncheckedCreateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCartInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutCartInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCartInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutCartInputObjectSchema = Schema;
