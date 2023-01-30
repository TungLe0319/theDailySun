/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutCartsInputObjectSchema } from './ProductCreateWithoutCartsInput.schema';
import { ProductUncheckedCreateWithoutCartsInputObjectSchema } from './ProductUncheckedCreateWithoutCartsInput.schema';
import { ProductCreateOrConnectWithoutCartsInputObjectSchema } from './ProductCreateOrConnectWithoutCartsInput.schema';
import { ProductUpsertWithoutCartsInputObjectSchema } from './ProductUpsertWithoutCartsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCartsInputObjectSchema } from './ProductUpdateWithoutCartsInput.schema';
import { ProductUncheckedUpdateWithoutCartsInputObjectSchema } from './ProductUncheckedUpdateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutCartsNestedInput> = z
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
    upsert: z.lazy(() => ProductUpsertWithoutCartsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithoutCartsInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutCartsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateOneWithoutCartsNestedInputObjectSchema = Schema;
