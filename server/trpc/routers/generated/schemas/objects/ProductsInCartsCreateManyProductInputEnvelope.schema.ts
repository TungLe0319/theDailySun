/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsCreateManyProductInputObjectSchema } from './ProductsInCartsCreateManyProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsCreateManyProductInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ProductsInCartsCreateManyProductInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProductsInCartsCreateManyProductInputEnvelopeObjectSchema = Schema;
