/* eslint-disable */
import { z } from 'zod';
import { ExampleSelectObjectSchema } from './objects/ExampleSelect.schema';
import { ExampleWhereUniqueInputObjectSchema } from './objects/ExampleWhereUniqueInput.schema';
import { ExampleWhereInputObjectSchema } from './objects/ExampleWhereInput.schema';
import { ExampleOrderByWithRelationInputObjectSchema } from './objects/ExampleOrderByWithRelationInput.schema';
import { ExampleScalarFieldEnumSchema } from './enums/ExampleScalarFieldEnum.schema';
import { ExampleCreateInputObjectSchema } from './objects/ExampleCreateInput.schema';
import { ExampleCreateManyInputObjectSchema } from './objects/ExampleCreateManyInput.schema';
import { ExampleUpdateInputObjectSchema } from './objects/ExampleUpdateInput.schema';
import { ExampleUpdateManyMutationInputObjectSchema } from './objects/ExampleUpdateManyMutationInput.schema';
import { ExampleCountAggregateInputObjectSchema } from './objects/ExampleCountAggregateInput.schema';
import { ExampleMinAggregateInputObjectSchema } from './objects/ExampleMinAggregateInput.schema';
import { ExampleMaxAggregateInputObjectSchema } from './objects/ExampleMaxAggregateInput.schema';
import { ExampleOrderByWithAggregationInputObjectSchema } from './objects/ExampleOrderByWithAggregationInput.schema';
import { ExampleScalarWhereWithAggregatesInputObjectSchema } from './objects/ExampleScalarWhereWithAggregatesInput.schema';

export const ExampleSchema = {
  findUnique: z.object({
    select: ExampleSelectObjectSchema.optional(),
    where: ExampleWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: ExampleSelectObjectSchema.optional(),
    where: ExampleWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ExampleOrderByWithRelationInputObjectSchema,
        ExampleOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ExampleWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ExampleScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => ExampleSelectObjectSchema.optional()),
    where: ExampleWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ExampleOrderByWithRelationInputObjectSchema,
        ExampleOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ExampleWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ExampleScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: ExampleSelectObjectSchema.optional(),
    data: ExampleCreateInputObjectSchema,
  }),
  createMany: z.object({ data: ExampleCreateManyInputObjectSchema }),
  delete: z.object({
    select: ExampleSelectObjectSchema.optional(),
    where: ExampleWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: ExampleWhereInputObjectSchema.optional() }),
  update: z.object({
    select: ExampleSelectObjectSchema.optional(),
    data: ExampleUpdateInputObjectSchema,
    where: ExampleWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: ExampleUpdateManyMutationInputObjectSchema,
    where: ExampleWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: ExampleSelectObjectSchema.optional(),
    where: ExampleWhereUniqueInputObjectSchema,
    create: ExampleCreateInputObjectSchema,
    update: ExampleUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: ExampleWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ExampleOrderByWithRelationInputObjectSchema,
        ExampleOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ExampleWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), ExampleCountAggregateInputObjectSchema])
      .optional(),
    _min: ExampleMinAggregateInputObjectSchema.optional(),
    _max: ExampleMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: ExampleWhereInputObjectSchema.optional(),
    orderBy: z.union([
      ExampleOrderByWithAggregationInputObjectSchema,
      ExampleOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: ExampleScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ExampleScalarFieldEnumSchema),
  }),
};
