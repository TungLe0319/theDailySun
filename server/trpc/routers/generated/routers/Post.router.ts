/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { PostSchema } from '../schemas/Post.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(PostSchema.aggregate).query(({ ctx, input }) => db(ctx).post.aggregate(input)),

        createMany: procedure.input(PostSchema.createMany).mutation(({ ctx, input }) => db(ctx).post.createMany(input)),

        create: procedure.input(PostSchema.create).mutation(({ ctx, input }) => db(ctx).post.create(input)),

        deleteMany: procedure.input(PostSchema.deleteMany).mutation(({ ctx, input }) => db(ctx).post.deleteMany(input)),

        delete: procedure.input(PostSchema.delete).mutation(({ ctx, input }) => db(ctx).post.delete(input)),

        findFirst: procedure.input(PostSchema.findFirst).query(({ ctx, input }) => db(ctx).post.findFirst(input)),

        findFirstOrThrow: procedure.input(PostSchema.findFirst).query(({ ctx, input }) => db(ctx).post.findFirstOrThrow(input)),

        findMany: procedure.input(PostSchema.findMany).query(({ ctx, input }) => db(ctx).post.findMany(input)),

        findUnique: procedure.input(PostSchema.findUnique).query(({ ctx, input }) => db(ctx).post.findUnique(input)),

        findUniqueOrThrow: procedure.input(PostSchema.findUnique).query(({ ctx, input }) => db(ctx).post.findUniqueOrThrow(input)),

        groupBy: procedure.input(PostSchema.groupBy).query(({ ctx, input }) => db(ctx).post.groupBy(input)),

        updateMany: procedure.input(PostSchema.updateMany).mutation(({ ctx, input }) => db(ctx).post.updateMany(input)),

        update: procedure.input(PostSchema.update).mutation(({ ctx, input }) => db(ctx).post.update(input)),

        upsert: procedure.input(PostSchema.upsert).mutation(({ ctx, input }) => db(ctx).post.upsert(input)),

    }
    );
}
