/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutCartInputObjectSchema } from './ProductCreateWithoutCartInput.schema';
import { ProductUncheckedCreateWithoutCartInputObjectSchema } from './ProductUncheckedCreateWithoutCartInput.schema';
import { ProductCreateOrConnectWithoutCartInputObjectSchema } from './ProductCreateOrConnectWithoutCartInput.schema';
import { ProductUpsertWithWhereUniqueWithoutCartInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutCartInput.schema';
import { ProductCreateManyCartInputEnvelopeObjectSchema } from './ProductCreateManyCartInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutCartInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutCartInput.schema';
import { ProductUpdateManyWithWhereWithoutCartInputObjectSchema } from './ProductUpdateManyWithWhereWithoutCartInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCartNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutCartInputObjectSchema),
          z.lazy(() => ProductCreateWithoutCartInputObjectSchema).array(),
          z.lazy(() => ProductUncheckedCreateWithoutCartInputObjectSchema),
          z
            .lazy(() => ProductUncheckedCreateWithoutCartInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProductCreateOrConnectWithoutCartInputObjectSchema),
          z
            .lazy(() => ProductCreateOrConnectWithoutCartInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ProductUpsertWithWhereUniqueWithoutCartInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductUpsertWithWhereUniqueWithoutCartInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProductCreateManyCartInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ProductUpdateWithWhereUniqueWithoutCartInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductUpdateWithWhereUniqueWithoutCartInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ProductUpdateManyWithWhereWithoutCartInputObjectSchema),
          z
            .lazy(() => ProductUpdateManyWithWhereWithoutCartInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductScalarWhereInputObjectSchema),
          z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductUncheckedUpdateManyWithoutCartNestedInputObjectSchema =
  Schema;
