/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsScalarWhereInputObjectSchema } from './ProductsInCartsScalarWhereInput.schema';
import { ProductsInCartsUpdateManyMutationInputObjectSchema } from './ProductsInCartsUpdateManyMutationInput.schema';
import { ProductsInCartsUncheckedUpdateManyWithoutProductsInputObjectSchema } from './ProductsInCartsUncheckedUpdateManyWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductsInCartsUpdateManyWithWhereWithoutCartInput> =
  z
    .object({
      where: z.lazy(() => ProductsInCartsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductsInCartsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProductsInCartsUncheckedUpdateManyWithoutProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductsInCartsUpdateManyWithWhereWithoutCartInputObjectSchema =
  Schema;
