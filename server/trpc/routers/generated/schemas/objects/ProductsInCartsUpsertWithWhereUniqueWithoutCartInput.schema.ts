/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';
import { ProductsInCartsUpdateWithoutCartInputObjectSchema } from './ProductsInCartsUpdateWithoutCartInput.schema';
import { ProductsInCartsUncheckedUpdateWithoutCartInputObjectSchema } from './ProductsInCartsUncheckedUpdateWithoutCartInput.schema';
import { ProductsInCartsCreateWithoutCartInputObjectSchema } from './ProductsInCartsCreateWithoutCartInput.schema';
import { ProductsInCartsUncheckedCreateWithoutCartInputObjectSchema } from './ProductsInCartsUncheckedCreateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUpsertWithWhereUniqueWithoutCartInput> =
  z
    .object({
      where: z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductsInCartsUpdateWithoutCartInputObjectSchema),
        z.lazy(
          () => ProductsInCartsUncheckedUpdateWithoutCartInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductsInCartsCreateWithoutCartInputObjectSchema),
        z.lazy(
          () => ProductsInCartsUncheckedCreateWithoutCartInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsInCartsUpsertWithWhereUniqueWithoutCartInputObjectSchema =
  Schema;
