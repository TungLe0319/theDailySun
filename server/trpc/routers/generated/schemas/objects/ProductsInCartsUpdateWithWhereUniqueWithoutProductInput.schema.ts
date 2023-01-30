/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';
import { ProductsInCartsUpdateWithoutProductInputObjectSchema } from './ProductsInCartsUpdateWithoutProductInput.schema';
import { ProductsInCartsUncheckedUpdateWithoutProductInputObjectSchema } from './ProductsInCartsUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsInCartsUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductsInCartsUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsInCartsUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
