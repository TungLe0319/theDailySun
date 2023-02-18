import { Cart } from "@prisma/client";
import Stripe from "stripe";
import { getServerSession } from "#auth";
// import { never } from 'zod';

export default defineEventHandler(async (event) => {
  const stripe = event.context.stripe;

  const prisma = event.context.prisma;
  const session = await getServerSession(event);
  const userId = session?.user.id;
  if (!userId) {
    createError("you must be logged in to add products to a cart");
  }
  const body = await readBody(event);
  const productData = body.productData;
  if (!body) {
    createError("need to send in a body");
  }
  if (!body.quantity && !body.id) {
    createError("error");
  }

  // const foundProduct = await prisma.product.findFirst({
  //   where: {
  //     title: productData.title,
  //     description: productData.description,
  //     quantity: productData.quantity,
  //     img: productData.img,
  //     price: productData.price,
  //     type: productData.type,
  //     audience: productData.audience,
  //     priceID: productData.priceID,
  //   },
  // });

  // if (foundProduct) {
  //   const cart = await prisma.cart.update({
  //     where: {
  //       userId: userId,
  //     },
  //     data: {
  //       products: {
  //         update: {
  //           where: {
  //             id: foundProduct.id,
  //           },
  //           data: {
  //             quantity: {
  //               increment: 1,
  //             },
  //           },
  //         },
  //       },
  //     },
  //     include: { products: true },
  //   });
  //   return { cart };
  // }

     const cart = await prisma.cart.update({
       where: {
         userId: userId,
       },
       data: {
         products: {
           create: {
             title: productData.title,
             description: productData.description,
             quantity: productData.quantity,
             img: productData.img,
             price: productData.price,
             type: productData.type,
             audience: productData.audience,
             priceID: productData.priceID,
           },
         },
       },
       include: { products: true },
     });
 return { cart };





});
