/* eslint-disable */
import { z } from 'zod';
import { ProductsInCartsSelectObjectSchema } from './objects/ProductsInCartsSelect.schema';
import { ProductsInCartsIncludeObjectSchema } from './objects/ProductsInCartsInclude.schema';
import { ProductsInCartsWhereUniqueInputObjectSchema } from './objects/ProductsInCartsWhereUniqueInput.schema';
import { ProductsInCartsWhereInputObjectSchema } from './objects/ProductsInCartsWhereInput.schema';
import { ProductsInCartsOrderByWithRelationInputObjectSchema } from './objects/ProductsInCartsOrderByWithRelationInput.schema';
import { ProductsInCartsScalarFieldEnumSchema } from './enums/ProductsInCartsScalarFieldEnum.schema';
import { ProductsInCartsCreateInputObjectSchema } from './objects/ProductsInCartsCreateInput.schema';
import { ProductsInCartsCreateManyInputObjectSchema } from './objects/ProductsInCartsCreateManyInput.schema';
import { ProductsInCartsUpdateInputObjectSchema } from './objects/ProductsInCartsUpdateInput.schema';
import { ProductsInCartsUpdateManyMutationInputObjectSchema } from './objects/ProductsInCartsUpdateManyMutationInput.schema';
import { ProductsInCartsCountAggregateInputObjectSchema } from './objects/ProductsInCartsCountAggregateInput.schema';
import { ProductsInCartsMinAggregateInputObjectSchema } from './objects/ProductsInCartsMinAggregateInput.schema';
import { ProductsInCartsMaxAggregateInputObjectSchema } from './objects/ProductsInCartsMaxAggregateInput.schema';
import { ProductsInCartsAvgAggregateInputObjectSchema } from './objects/ProductsInCartsAvgAggregateInput.schema';
import { ProductsInCartsSumAggregateInputObjectSchema } from './objects/ProductsInCartsSumAggregateInput.schema';
import { ProductsInCartsOrderByWithAggregationInputObjectSchema } from './objects/ProductsInCartsOrderByWithAggregationInput.schema';
import { ProductsInCartsScalarWhereWithAggregatesInputObjectSchema } from './objects/ProductsInCartsScalarWhereWithAggregatesInput.schema';

export const ProductsInCartsSchema = {
  findUnique: z.object({
    select: ProductsInCartsSelectObjectSchema.optional(),
    include: ProductsInCartsIncludeObjectSchema.optional(),
    where: ProductsInCartsWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: ProductsInCartsSelectObjectSchema.optional(),
    include: ProductsInCartsIncludeObjectSchema.optional(),
    where: ProductsInCartsWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ProductsInCartsOrderByWithRelationInputObjectSchema,
        ProductsInCartsOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ProductsInCartsWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ProductsInCartsScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => ProductsInCartsSelectObjectSchema.optional()),
    include: z.lazy(() => ProductsInCartsIncludeObjectSchema.optional()),
    where: ProductsInCartsWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ProductsInCartsOrderByWithRelationInputObjectSchema,
        ProductsInCartsOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ProductsInCartsWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ProductsInCartsScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: ProductsInCartsSelectObjectSchema.optional(),
    include: ProductsInCartsIncludeObjectSchema.optional(),
    data: ProductsInCartsCreateInputObjectSchema,
  }),
  createMany: z.object({ data: ProductsInCartsCreateManyInputObjectSchema }),
  delete: z.object({
    select: ProductsInCartsSelectObjectSchema.optional(),
    include: ProductsInCartsIncludeObjectSchema.optional(),
    where: ProductsInCartsWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({
    where: ProductsInCartsWhereInputObjectSchema.optional(),
  }),
  update: z.object({
    select: ProductsInCartsSelectObjectSchema.optional(),
    include: ProductsInCartsIncludeObjectSchema.optional(),
    data: ProductsInCartsUpdateInputObjectSchema,
    where: ProductsInCartsWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: ProductsInCartsUpdateManyMutationInputObjectSchema,
    where: ProductsInCartsWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: ProductsInCartsSelectObjectSchema.optional(),
    include: ProductsInCartsIncludeObjectSchema.optional(),
    where: ProductsInCartsWhereUniqueInputObjectSchema,
    create: ProductsInCartsCreateInputObjectSchema,
    update: ProductsInCartsUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: ProductsInCartsWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ProductsInCartsOrderByWithRelationInputObjectSchema,
        ProductsInCartsOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ProductsInCartsWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), ProductsInCartsCountAggregateInputObjectSchema])
      .optional(),
    _min: ProductsInCartsMinAggregateInputObjectSchema.optional(),
    _max: ProductsInCartsMaxAggregateInputObjectSchema.optional(),
    _avg: ProductsInCartsAvgAggregateInputObjectSchema.optional(),
    _sum: ProductsInCartsSumAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: ProductsInCartsWhereInputObjectSchema.optional(),
    orderBy: z.union([
      ProductsInCartsOrderByWithAggregationInputObjectSchema,
      ProductsInCartsOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having:
      ProductsInCartsScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ProductsInCartsScalarFieldEnumSchema),
  }),
};
