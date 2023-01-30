/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutCartsInput> = z
  .object({
    title: z.string(),
    description: z.string().optional().nullable(),
    price: z.number(),
    img: z.string(),
    stripe: z.string(),
    productImg: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    audience: z.string().optional().nullable(),
    quantity: z.number().optional().nullable(),
  })
  .strict();

export const ProductCreateWithoutCartsInputObjectSchema = Schema;
