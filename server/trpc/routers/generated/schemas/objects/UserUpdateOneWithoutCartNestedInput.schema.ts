/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutCartInputObjectSchema } from './UserCreateWithoutCartInput.schema';
import { UserUncheckedCreateWithoutCartInputObjectSchema } from './UserUncheckedCreateWithoutCartInput.schema';
import { UserCreateOrConnectWithoutCartInputObjectSchema } from './UserCreateOrConnectWithoutCartInput.schema';
import { UserUpsertWithoutCartInputObjectSchema } from './UserUpsertWithoutCartInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCartInputObjectSchema } from './UserUpdateWithoutCartInput.schema';
import { UserUncheckedUpdateWithoutCartInputObjectSchema } from './UserUncheckedUpdateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutCartNestedInput> = z
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
    upsert: z.lazy(() => UserUpsertWithoutCartInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutCartInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCartInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutCartNestedInputObjectSchema = Schema;
