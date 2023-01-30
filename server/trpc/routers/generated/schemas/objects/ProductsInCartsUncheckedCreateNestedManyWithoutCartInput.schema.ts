/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsCreateWithoutCartInputObjectSchema } from './ProductsInCartsCreateWithoutCartInput.schema';
import { ProductsInCartsUncheckedCreateWithoutCartInputObjectSchema } from './ProductsInCartsUncheckedCreateWithoutCartInput.schema';
import { ProductsInCartsCreateOrConnectWithoutCartInputObjectSchema } from './ProductsInCartsCreateOrConnectWithoutCartInput.schema';
import { ProductsInCartsCreateManyCartInputEnvelopeObjectSchema } from './ProductsInCartsCreateManyCartInputEnvelope.schema';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUncheckedCreateNestedManyWithoutCartInput> =
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
      createMany: z
        .lazy(() => ProductsInCartsCreateManyCartInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
          z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductsInCartsUncheckedCreateNestedManyWithoutCartInputObjectSchema =
  Schema;
