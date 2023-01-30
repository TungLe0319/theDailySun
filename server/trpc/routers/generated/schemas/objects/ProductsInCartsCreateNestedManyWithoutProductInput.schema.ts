/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsCreateWithoutProductInputObjectSchema } from './ProductsInCartsCreateWithoutProductInput.schema';
import { ProductsInCartsUncheckedCreateWithoutProductInputObjectSchema } from './ProductsInCartsUncheckedCreateWithoutProductInput.schema';
import { ProductsInCartsCreateOrConnectWithoutProductInputObjectSchema } from './ProductsInCartsCreateOrConnectWithoutProductInput.schema';
import { ProductsInCartsCreateManyProductInputEnvelopeObjectSchema } from './ProductsInCartsCreateManyProductInputEnvelope.schema';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsCreateNestedManyWithoutProductInput> =
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
      createMany: z
        .lazy(() => ProductsInCartsCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductsInCartsCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
