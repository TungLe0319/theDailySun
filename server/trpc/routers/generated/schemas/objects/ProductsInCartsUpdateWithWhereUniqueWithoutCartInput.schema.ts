/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';
import { ProductsInCartsUpdateWithoutCartInputObjectSchema } from './ProductsInCartsUpdateWithoutCartInput.schema';
import { ProductsInCartsUncheckedUpdateWithoutCartInputObjectSchema } from './ProductsInCartsUncheckedUpdateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUpdateWithWhereUniqueWithoutCartInput> =
  z
    .object({
      where: z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsInCartsUpdateWithoutCartInputObjectSchema),
        z.lazy(
          () => ProductsInCartsUncheckedUpdateWithoutCartInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsInCartsUpdateWithWhereUniqueWithoutCartInputObjectSchema =
  Schema;
