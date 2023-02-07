import { Cart } from "@prisma/client";
import Stripe from "stripe";
import { getServerSession } from "#auth";
// import { never } from 'zod';

export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma;

  const session = await getServerSession(event);
  const userId = session?.user.id;
  


  const user = await prisma.user.findUnique({

where:{
  id : userId
},
include:{
  receipts:{}
}
  });

  return user;
});
