/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsScalarWhereInputObjectSchema } from './ProductsInCartsScalarWhereInput.schema';
import { ProductsInCartsUpdateManyMutationInputObjectSchema } from './ProductsInCartsUpdateManyMutationInput.schema';
import { ProductsInCartsUncheckedUpdateManyWithoutCartsInputObjectSchema } from './ProductsInCartsUncheckedUpdateManyWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductsInCartsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsInCartsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ProductsInCartsUncheckedUpdateManyWithoutCartsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsInCartsUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;
