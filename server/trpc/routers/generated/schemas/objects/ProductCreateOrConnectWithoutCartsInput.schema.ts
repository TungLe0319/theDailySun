/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutCartsInputObjectSchema } from './ProductCreateWithoutCartsInput.schema';
import { ProductUncheckedCreateWithoutCartsInputObjectSchema } from './ProductUncheckedCreateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCartsInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutCartsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutCartsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutCartsInputObjectSchema = Schema;
