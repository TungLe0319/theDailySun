/* eslint-disable */
import { z } from 'zod';
import { ProductUpdateWithoutCartsInputObjectSchema } from './ProductUpdateWithoutCartsInput.schema';
import { ProductUncheckedUpdateWithoutCartsInputObjectSchema } from './ProductUncheckedUpdateWithoutCartsInput.schema';
import { ProductCreateWithoutCartsInputObjectSchema } from './ProductCreateWithoutCartsInput.schema';
import { ProductUncheckedCreateWithoutCartsInputObjectSchema } from './ProductUncheckedCreateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutCartsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutCartsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutCartsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutCartsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutCartsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutCartsInputObjectSchema = Schema;
