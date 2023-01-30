/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';
import { ProductsInCartsUpdateWithoutProductInputObjectSchema } from './ProductsInCartsUpdateWithoutProductInput.schema';
import { ProductsInCartsUncheckedUpdateWithoutProductInputObjectSchema } from './ProductsInCartsUncheckedUpdateWithoutProductInput.schema';
import { ProductsInCartsCreateWithoutProductInputObjectSchema } from './ProductsInCartsCreateWithoutProductInput.schema';
import { ProductsInCartsUncheckedCreateWithoutProductInputObjectSchema } from './ProductsInCartsUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductsInCartsUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductsInCartsUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductsInCartsCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductsInCartsUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsInCartsUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
