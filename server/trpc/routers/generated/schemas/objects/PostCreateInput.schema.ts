/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateInput> = z
  .object({
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional(),
    authorId: z.number(),
  })
  .strict();

export const PostCreateInputObjectSchema = Schema;
