/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutCartsInputObjectSchema } from './ProductCreateWithoutCartsInput.schema';
import { ProductUncheckedCreateWithoutCartsInputObjectSchema } from './ProductUncheckedCreateWithoutCartsInput.schema';
import { ProductCreateOrConnectWithoutCartsInputObjectSchema } from './ProductCreateOrConnectWithoutCartsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutCartsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutCartsInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutCartsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutCartsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutCartsInputObjectSchema = Schema;
