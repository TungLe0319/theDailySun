/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './ProductsInCartsWhereUniqueInput.schema';
import { ProductsInCartsCreateWithoutProductInputObjectSchema } from './ProductsInCartsCreateWithoutProductInput.schema';
import { ProductsInCartsUncheckedCreateWithoutProductInputObjectSchema } from './ProductsInCartsUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductsInCartsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductsInCartsCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductsInCartsUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsInCartsCreateOrConnectWithoutProductInputObjectSchema =
  Schema;
