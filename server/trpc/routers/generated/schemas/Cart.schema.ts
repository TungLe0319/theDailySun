/* eslint-disable */
import { z } from 'zod';
import { CartSelectObjectSchema } from './objects/CartSelect.schema';
import { CartIncludeObjectSchema } from './objects/CartInclude.schema';
import { CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';
import { CartWhereInputObjectSchema } from './objects/CartWhereInput.schema';
import { CartOrderByWithRelationInputObjectSchema } from './objects/CartOrderByWithRelationInput.schema';
import { CartScalarFieldEnumSchema } from './enums/CartScalarFieldEnum.schema';
import { CartCreateInputObjectSchema } from './objects/CartCreateInput.schema';
import { CartCreateManyInputObjectSchema } from './objects/CartCreateManyInput.schema';
import { CartUpdateInputObjectSchema } from './objects/CartUpdateInput.schema';
import { CartUpdateManyMutationInputObjectSchema } from './objects/CartUpdateManyMutationInput.schema';
import { CartCountAggregateInputObjectSchema } from './objects/CartCountAggregateInput.schema';
import { CartMinAggregateInputObjectSchema } from './objects/CartMinAggregateInput.schema';
import { CartMaxAggregateInputObjectSchema } from './objects/CartMaxAggregateInput.schema';
import { CartAvgAggregateInputObjectSchema } from './objects/CartAvgAggregateInput.schema';
import { CartSumAggregateInputObjectSchema } from './objects/CartSumAggregateInput.schema';
import { CartOrderByWithAggregationInputObjectSchema } from './objects/CartOrderByWithAggregationInput.schema';
import { CartScalarWhereWithAggregatesInputObjectSchema } from './objects/CartScalarWhereWithAggregatesInput.schema';

export const CartSchema = {
  findUnique: z.object({
    select: CartSelectObjectSchema.optional(),
    include: CartIncludeObjectSchema.optional(),
    where: CartWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: CartSelectObjectSchema.optional(),
    include: CartIncludeObjectSchema.optional(),
    where: CartWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        CartOrderByWithRelationInputObjectSchema,
        CartOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: CartWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(CartScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => CartSelectObjectSchema.optional()),
    include: z.lazy(() => CartIncludeObjectSchema.optional()),
    where: CartWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        CartOrderByWithRelationInputObjectSchema,
        CartOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: CartWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(CartScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: CartSelectObjectSchema.optional(),
    include: CartIncludeObjectSchema.optional(),
    data: CartCreateInputObjectSchema,
  }),
  createMany: z.object({ data: CartCreateManyInputObjectSchema }),
  delete: z.object({
    select: CartSelectObjectSchema.optional(),
    include: CartIncludeObjectSchema.optional(),
    where: CartWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: CartWhereInputObjectSchema.optional() }),
  update: z.object({
    select: CartSelectObjectSchema.optional(),
    include: CartIncludeObjectSchema.optional(),
    data: CartUpdateInputObjectSchema,
    where: CartWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: CartUpdateManyMutationInputObjectSchema,
    where: CartWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: CartSelectObjectSchema.optional(),
    include: CartIncludeObjectSchema.optional(),
    where: CartWhereUniqueInputObjectSchema,
    create: CartCreateInputObjectSchema,
    update: CartUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: CartWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        CartOrderByWithRelationInputObjectSchema,
        CartOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: CartWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), CartCountAggregateInputObjectSchema])
      .optional(),
    _min: CartMinAggregateInputObjectSchema.optional(),
    _max: CartMaxAggregateInputObjectSchema.optional(),
    _avg: CartAvgAggregateInputObjectSchema.optional(),
    _sum: CartSumAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: CartWhereInputObjectSchema.optional(),
    orderBy: z.union([
      CartOrderByWithAggregationInputObjectSchema,
      CartOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: CartScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(CartScalarFieldEnumSchema),
  }),
};
