/* eslint-disable */
import { z } from 'zod';
import { ProductSelectObjectSchema } from './objects/ProductSelect.schema';
import { ProductIncludeObjectSchema } from './objects/ProductInclude.schema';
import { ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';
import { ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './objects/ProductOrderByWithRelationInput.schema';
import { ProductScalarFieldEnumSchema } from './enums/ProductScalarFieldEnum.schema';
import { ProductCreateInputObjectSchema } from './objects/ProductCreateInput.schema';
import { ProductCreateManyInputObjectSchema } from './objects/ProductCreateManyInput.schema';
import { ProductUpdateInputObjectSchema } from './objects/ProductUpdateInput.schema';
import { ProductUpdateManyMutationInputObjectSchema } from './objects/ProductUpdateManyMutationInput.schema';
import { ProductCountAggregateInputObjectSchema } from './objects/ProductCountAggregateInput.schema';
import { ProductMinAggregateInputObjectSchema } from './objects/ProductMinAggregateInput.schema';
import { ProductMaxAggregateInputObjectSchema } from './objects/ProductMaxAggregateInput.schema';
import { ProductAvgAggregateInputObjectSchema } from './objects/ProductAvgAggregateInput.schema';
import { ProductSumAggregateInputObjectSchema } from './objects/ProductSumAggregateInput.schema';
import { ProductOrderByWithAggregationInputObjectSchema } from './objects/ProductOrderByWithAggregationInput.schema';
import { ProductScalarWhereWithAggregatesInputObjectSchema } from './objects/ProductScalarWhereWithAggregatesInput.schema';

export const ProductSchema = {
  findUnique: z.object({
    select: ProductSelectObjectSchema.optional(),
    include: ProductIncludeObjectSchema.optional(),
    where: ProductWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: ProductSelectObjectSchema.optional(),
    include: ProductIncludeObjectSchema.optional(),
    where: ProductWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ProductOrderByWithRelationInputObjectSchema,
        ProductOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ProductWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ProductScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => ProductSelectObjectSchema.optional()),
    include: z.lazy(() => ProductIncludeObjectSchema.optional()),
    where: ProductWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ProductOrderByWithRelationInputObjectSchema,
        ProductOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ProductWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ProductScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: ProductSelectObjectSchema.optional(),
    include: ProductIncludeObjectSchema.optional(),
    data: ProductCreateInputObjectSchema,
  }),
  createMany: z.object({ data: ProductCreateManyInputObjectSchema }),
  delete: z.object({
    select: ProductSelectObjectSchema.optional(),
    include: ProductIncludeObjectSchema.optional(),
    where: ProductWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: ProductWhereInputObjectSchema.optional() }),
  update: z.object({
    select: ProductSelectObjectSchema.optional(),
    include: ProductIncludeObjectSchema.optional(),
    data: ProductUpdateInputObjectSchema,
    where: ProductWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: ProductUpdateManyMutationInputObjectSchema,
    where: ProductWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: ProductSelectObjectSchema.optional(),
    include: ProductIncludeObjectSchema.optional(),
    where: ProductWhereUniqueInputObjectSchema,
    create: ProductCreateInputObjectSchema,
    update: ProductUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: ProductWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ProductOrderByWithRelationInputObjectSchema,
        ProductOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ProductWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), ProductCountAggregateInputObjectSchema])
      .optional(),
    _min: ProductMinAggregateInputObjectSchema.optional(),
    _max: ProductMaxAggregateInputObjectSchema.optional(),
    _avg: ProductAvgAggregateInputObjectSchema.optional(),
    _sum: ProductSumAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: ProductWhereInputObjectSchema.optional(),
    orderBy: z.union([
      ProductOrderByWithAggregationInputObjectSchema,
      ProductOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: ProductScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ProductScalarFieldEnumSchema),
  }),
};
