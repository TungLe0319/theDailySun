/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsCreateManyCartInputObjectSchema } from './ProductsInCartsCreateManyCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsCreateManyCartInputEnvelope> = z
  .object({
    data: z.lazy(() => ProductsInCartsCreateManyCartInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProductsInCartsCreateManyCartInputEnvelopeObjectSchema = Schema;
