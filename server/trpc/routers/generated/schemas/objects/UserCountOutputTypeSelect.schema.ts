/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
  .object({})
  .strict();

export const UserCountOutputTypeSelectObjectSchema = Schema;
