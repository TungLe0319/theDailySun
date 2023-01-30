/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutCartInputObjectSchema } from './ProductCreateWithoutCartInput.schema';
import { ProductUncheckedCreateWithoutCartInputObjectSchema } from './ProductUncheckedCreateWithoutCartInput.schema';
import { ProductCreateOrConnectWithoutCartInputObjectSchema } from './ProductCreateOrConnectWithoutCartInput.schema';
import { ProductCreateManyCartInputEnvelopeObjectSchema } from './ProductCreateManyCartInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCartInput> = z
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
    createMany: z
      .lazy(() => ProductCreateManyCartInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductCreateNestedManyWithoutCartInputObjectSchema = Schema;
