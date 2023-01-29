/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { ExampleSchema } from '../schemas/Example.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(ExampleSchema.aggregate).query(({ ctx, input }) => db(ctx).example.aggregate(input)),

        createMany: procedure.input(ExampleSchema.createMany).mutation(({ ctx, input }) => db(ctx).example.createMany(input)),

        create: procedure.input(ExampleSchema.create).mutation(({ ctx, input }) => db(ctx).example.create(input)),

        deleteMany: procedure.input(ExampleSchema.deleteMany).mutation(({ ctx, input }) => db(ctx).example.deleteMany(input)),

        delete: procedure.input(ExampleSchema.delete).mutation(({ ctx, input }) => db(ctx).example.delete(input)),

        findFirst: procedure.input(ExampleSchema.findFirst).query(({ ctx, input }) => db(ctx).example.findFirst(input)),

        findFirstOrThrow: procedure.input(ExampleSchema.findFirst).query(({ ctx, input }) => db(ctx).example.findFirstOrThrow(input)),

        findMany: procedure.input(ExampleSchema.findMany).query(({ ctx, input }) => db(ctx).example.findMany(input)),

        findUnique: procedure.input(ExampleSchema.findUnique).query(({ ctx, input }) => db(ctx).example.findUnique(input)),

        findUniqueOrThrow: procedure.input(ExampleSchema.findUnique).query(({ ctx, input }) => db(ctx).example.findUniqueOrThrow(input)),

        groupBy: procedure.input(ExampleSchema.groupBy).query(({ ctx, input }) => db(ctx).example.groupBy(input)),

        updateMany: procedure.input(ExampleSchema.updateMany).mutation(({ ctx, input }) => db(ctx).example.updateMany(input)),

        update: procedure.input(ExampleSchema.update).mutation(({ ctx, input }) => db(ctx).example.update(input)),

        upsert: procedure.input(ExampleSchema.upsert).mutation(({ ctx, input }) => db(ctx).example.upsert(input)),

    }
    );
}
