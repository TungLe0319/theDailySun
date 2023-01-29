/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { ProductSchema } from '../schemas/Product.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(ProductSchema.aggregate).query(({ ctx, input }) => db(ctx).product.aggregate(input)),

        createMany: procedure.input(ProductSchema.createMany).mutation(({ ctx, input }) => db(ctx).product.createMany(input)),

        create: procedure.input(ProductSchema.create).mutation(({ ctx, input }) => db(ctx).product.create(input)),

        deleteMany: procedure.input(ProductSchema.deleteMany).mutation(({ ctx, input }) => db(ctx).product.deleteMany(input)),

        delete: procedure.input(ProductSchema.delete).mutation(({ ctx, input }) => db(ctx).product.delete(input)),

        findFirst: procedure.input(ProductSchema.findFirst).query(({ ctx, input }) => db(ctx).product.findFirst(input)),

        findFirstOrThrow: procedure.input(ProductSchema.findFirst).query(({ ctx, input }) => db(ctx).product.findFirstOrThrow(input)),

        findMany: procedure.input(ProductSchema.findMany).query(({ ctx, input }) => db(ctx).product.findMany(input)),

        findUnique: procedure.input(ProductSchema.findUnique).query(({ ctx, input }) => db(ctx).product.findUnique(input)),

        findUniqueOrThrow: procedure.input(ProductSchema.findUnique).query(({ ctx, input }) => db(ctx).product.findUniqueOrThrow(input)),

        groupBy: procedure.input(ProductSchema.groupBy).query(({ ctx, input }) => db(ctx).product.groupBy(input)),

        updateMany: procedure.input(ProductSchema.updateMany).mutation(({ ctx, input }) => db(ctx).product.updateMany(input)),

        update: procedure.input(ProductSchema.update).mutation(({ ctx, input }) => db(ctx).product.update(input)),

        upsert: procedure.input(ProductSchema.upsert).mutation(({ ctx, input }) => db(ctx).product.upsert(input)),

    }
    );
}
