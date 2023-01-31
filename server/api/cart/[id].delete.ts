export default defineEventHandler((event) => {
    const prisma = event.context.prisma
    const id = event.context.params.id





    
 prisma.cart.delete({
    where: { id: id },
  });




  return{success:true}



})
