/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { ProductsInCartsSchema } from '../schemas/ProductsInCarts.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(ProductsInCartsSchema.aggregate).query(({ ctx, input }) => db(ctx).productsInCarts.aggregate(input)),

        createMany: procedure.input(ProductsInCartsSchema.createMany).mutation(({ ctx, input }) => db(ctx).productsInCarts.createMany(input)),

        create: procedure.input(ProductsInCartsSchema.create).mutation(({ ctx, input }) => db(ctx).productsInCarts.create(input)),

        deleteMany: procedure.input(ProductsInCartsSchema.deleteMany).mutation(({ ctx, input }) => db(ctx).productsInCarts.deleteMany(input)),

        delete: procedure.input(ProductsInCartsSchema.delete).mutation(({ ctx, input }) => db(ctx).productsInCarts.delete(input)),

        findFirst: procedure.input(ProductsInCartsSchema.findFirst).query(({ ctx, input }) => db(ctx).productsInCarts.findFirst(input)),

        findFirstOrThrow: procedure.input(ProductsInCartsSchema.findFirst).query(({ ctx, input }) => db(ctx).productsInCarts.findFirstOrThrow(input)),

        findMany: procedure.input(ProductsInCartsSchema.findMany).query(({ ctx, input }) => db(ctx).productsInCarts.findMany(input)),

        findUnique: procedure.input(ProductsInCartsSchema.findUnique).query(({ ctx, input }) => db(ctx).productsInCarts.findUnique(input)),

        findUniqueOrThrow: procedure.input(ProductsInCartsSchema.findUnique).query(({ ctx, input }) => db(ctx).productsInCarts.findUniqueOrThrow(input)),

        groupBy: procedure.input(ProductsInCartsSchema.groupBy).query(({ ctx, input }) => db(ctx).productsInCarts.groupBy(input)),

        updateMany: procedure.input(ProductsInCartsSchema.updateMany).mutation(({ ctx, input }) => db(ctx).productsInCarts.updateMany(input)),

        update: procedure.input(ProductsInCartsSchema.update).mutation(({ ctx, input }) => db(ctx).productsInCarts.update(input)),

        upsert: procedure.input(ProductsInCartsSchema.upsert).mutation(({ ctx, input }) => db(ctx).productsInCarts.upsert(input)),

    }
    );
}
