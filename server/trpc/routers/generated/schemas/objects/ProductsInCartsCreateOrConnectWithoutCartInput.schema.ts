/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';
import { ProductsInCartsCreateWithoutCartInputObjectSchema } from './ProductsInCartsCreateWithoutCartInput.schema';
import { ProductsInCartsUncheckedCreateWithoutCartInputObjectSchema } from './ProductsInCartsUncheckedCreateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsCreateOrConnectWithoutCartInput> =
  z
    .object({
      where: z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductsInCartsCreateWithoutCartInputObjectSchema),
        z.lazy(
          () => ProductsInCartsUncheckedCreateWithoutCartInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsInCartsCreateOrConnectWithoutCartInputObjectSchema =
  Schema;
