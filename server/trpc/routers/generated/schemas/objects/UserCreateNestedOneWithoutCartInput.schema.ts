/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCartInputObjectSchema } from './UserCreateWithoutCartInput.schema';
import { UserUncheckedCreateWithoutCartInputObjectSchema } from './UserUncheckedCreateWithoutCartInput.schema';
import { UserCreateOrConnectWithoutCartInputObjectSchema } from './UserCreateOrConnectWithoutCartInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCartInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutCartInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutCartInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutCartInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutCartInputObjectSchema = Schema;
