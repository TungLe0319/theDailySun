/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCartInputObjectSchema } from './ProductUpdateWithoutCartInput.schema';
import { ProductUncheckedUpdateWithoutCartInputObjectSchema } from './ProductUncheckedUpdateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCartInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ProductUpdateWithoutCartInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutCartInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpdateWithWhereUniqueWithoutCartInputObjectSchema = Schema;
