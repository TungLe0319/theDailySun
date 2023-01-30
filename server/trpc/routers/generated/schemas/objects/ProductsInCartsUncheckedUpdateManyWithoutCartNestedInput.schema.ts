/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsCreateWithoutCartInputObjectSchema } from './ProductsInCartsCreateWithoutCartInput.schema';
import { ProductsInCartsUncheckedCreateWithoutCartInputObjectSchema } from './ProductsInCartsUncheckedCreateWithoutCartInput.schema';
import { ProductsInCartsCreateOrConnectWithoutCartInputObjectSchema } from './ProductsInCartsCreateOrConnectWithoutCartInput.schema';
import { ProductsInCartsUpsertWithWhereUniqueWithoutCartInputObjectSchema } from './ProductsInCartsUpsertWithWhereUniqueWithoutCartInput.schema';
import { ProductsInCartsCreateManyCartInputEnvelopeObjectSchema } from './ProductsInCartsCreateManyCartInputEnvelope.schema';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';
import { ProductsInCartsUpdateWithWhereUniqueWithoutCartInputObjectSchema } from './ProductsInCartsUpdateWithWhereUniqueWithoutCartInput.schema';
import { ProductsInCartsUpdateManyWithWhereWithoutCartInputObjectSchema } from './ProductsInCartsUpdateManyWithWhereWithoutCartInput.schema';
import { ProductsInCartsScalarWhereInputObjectSchema } from './ProductsInCartsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUncheckedUpdateManyWithoutCartNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductsInCartsCreateWithoutCartInputObjectSchema),
          z
            .lazy(() => ProductsInCartsCreateWithoutCartInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductsInCartsUncheckedCreateWithoutCartInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductsInCartsUncheckedCreateWithoutCartInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductsInCartsCreateOrConnectWithoutCartInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductsInCartsCreateOrConnectWithoutCartInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductsInCartsUpsertWithWhereUniqueWithoutCartInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsInCartsUpsertWithWhereUniqueWithoutCartInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProductsInCartsCreateManyCartInputEnvelopeObjectSchema)
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
              ProductsInCartsUpdateWithWhereUniqueWithoutCartInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsInCartsUpdateWithWhereUniqueWithoutCartInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProductsInCartsUpdateManyWithWhereWithoutCartInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductsInCartsUpdateManyWithWhereWithoutCartInputObjectSchema,
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

export const ProductsInCartsUncheckedUpdateManyWithoutCartNestedInputObjectSchema =
  Schema;
