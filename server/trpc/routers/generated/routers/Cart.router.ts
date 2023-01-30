/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { CartSchema } from '../schemas/Cart.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(CartSchema.aggregate).query(({ ctx, input }) => db(ctx).cart.aggregate(input)),

        createMany: procedure.input(CartSchema.createMany).mutation(({ ctx, input }) => db(ctx).cart.createMany(input)),

        create: procedure.input(CartSchema.create).mutation(({ ctx, input }) => db(ctx).cart.create(input)),

        deleteMany: procedure.input(CartSchema.deleteMany).mutation(({ ctx, input }) => db(ctx).cart.deleteMany(input)),

        delete: procedure.input(CartSchema.delete).mutation(({ ctx, input }) => db(ctx).cart.delete(input)),

        findFirst: procedure.input(CartSchema.findFirst).query(({ ctx, input }) => db(ctx).cart.findFirst(input)),

        findFirstOrThrow: procedure.input(CartSchema.findFirst).query(({ ctx, input }) => db(ctx).cart.findFirstOrThrow(input)),

        findMany: procedure.input(CartSchema.findMany).query(({ ctx, input }) => db(ctx).cart.findMany(input)),

        findUnique: procedure.input(CartSchema.findUnique).query(({ ctx, input }) => db(ctx).cart.findUnique(input)),

        findUniqueOrThrow: procedure.input(CartSchema.findUnique).query(({ ctx, input }) => db(ctx).cart.findUniqueOrThrow(input)),

        groupBy: procedure.input(CartSchema.groupBy).query(({ ctx, input }) => db(ctx).cart.groupBy(input)),

        updateMany: procedure.input(CartSchema.updateMany).mutation(({ ctx, input }) => db(ctx).cart.updateMany(input)),

        update: procedure.input(CartSchema.update).mutation(({ ctx, input }) => db(ctx).cart.update(input)),

        upsert: procedure.input(CartSchema.upsert).mutation(({ ctx, input }) => db(ctx).cart.upsert(input)),

    }
    );
}
