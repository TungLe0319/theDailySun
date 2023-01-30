/* eslint-disable */
import { z } from 'zod';
import { ProductCreateManyCartInputObjectSchema } from './ProductCreateManyCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateManyCartInputEnvelope> = z
  .object({
    data: z.lazy(() => ProductCreateManyCartInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProductCreateManyCartInputEnvelopeObjectSchema = Schema;
