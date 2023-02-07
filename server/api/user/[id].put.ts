import { Cart } from "@prisma/client";
import Stripe from "stripe";
import { getServerSession } from "#auth";
// import { never } from 'zod';

export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma;

  const session = await getServerSession(event);
  const userId = session?.user.id;
  if (!userId) {
    createError("you must be logged in to add products to a cart");
  }
  const body = await readBody(event);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      receipts: {},
    },
  });

  const receiptExists = user?.receipts?.find(
    (r) => r.receiptNumber == body.receiptNumber
  );
 if (receiptExists ) {
   return createError("This Receipt Already Exists");

 }
 const updatedUser = await prisma.user.update({
   where: {
     id: userId,
   },
   data: {
     receipts: {
       create: {
         url: body.receiptUrl,
         receiptNumber: body.receiptNumber
       },
     },
   },
   include: {
     receipts: {},
   },
 });

 return updatedUser

});
