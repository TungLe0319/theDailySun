/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsCreateWithoutProductInputObjectSchema } from './ProductsInCartsCreateWithoutProductInput.schema';
import { ProductsInCartsUncheckedCreateWithoutProductInputObjectSchema } from './ProductsInCartsUncheckedCreateWithoutProductInput.schema';
import { ProductsInCartsCreateOrConnectWithoutProductInputObjectSchema } from './ProductsInCartsCreateOrConnectWithoutProductInput.schema';
import { ProductsInCartsUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductsInCartsUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductsInCartsCreateManyProductInputEnvelopeObjectSchema } from './ProductsInCartsCreateManyProductInputEnvelope.schema';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';
import { ProductsInCartsUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductsInCartsUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductsInCartsUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductsInCartsUpdateManyWithWhereWithoutProductInput.schema';
import { ProductsInCartsScalarWhereInputObjectSchema } from './ProductsInCartsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUncheckedUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductsInCartsCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => ProductsInCartsCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductsInCartsUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsInCartsUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductsInCartsCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsInCartsCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductsInCartsUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsInCartsUpsertWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProductsInCartsCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProductsInCartsUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsInCartsUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProductsInCartsUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsInCartsUpdateManyWithWhereWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductsInCartsScalarWhereInputObjectSchema),
          z.lazy(() => ProductsInCartsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductsInCartsUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
