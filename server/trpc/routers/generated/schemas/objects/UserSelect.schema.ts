/* eslint-disable */
import { z } from 'zod';
import { CartArgsObjectSchema } from './CartArgs.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    image: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserSelectObjectSchema = Schema;
