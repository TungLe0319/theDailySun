export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma;
  // const userId = event.context.userId
  const products = await prisma.product.findMany({
  where:{
AND:{
  cart:{
    none:{}
  }
}
  },
  include:{
    cart:{

    }
  }
  });
  return products;
});
