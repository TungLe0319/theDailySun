/* eslint-disable */
import { z } from 'zod';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutProductsInputObjectSchema } from './ProductUncheckedUpdateManyWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutCartInput> = z
  .object({
    where: z.lazy(() => ProductScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ProductUpdateManyMutationInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpdateManyWithWhereWithoutCartInputObjectSchema = Schema;