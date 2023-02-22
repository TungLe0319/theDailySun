<template>
 <transition name="fade">
  <article
    class="shadow-xl relative bg-zinc-100 p-2 rounded-lg my-3 review-card"
  >
    <div class="absolute top-0 right-0 z-50" v-if="review?.user?.id == user.user.id">
      <button
        class="font-1 text-xl font-bold hover:text-red-400 transition-colors"
        @click="removeReview()"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/458/458594.png"
          alt="remove Icon"
          width="30"
          class="icon"
        />
      </button>
    </div>
    <div class="flex items-center mb-4 space-x-4">
      <img class="w-10 h-10 rounded-full" :src="review?.user?.image" alt="" />
      <div class="space-y-1 font-medium">
        <p>{{ review.user.name }}</p>
        <small>
          Reviewed on
          <time datetime="2017-03-03 19:00">{{
            new Date(review.createdAt).toLocaleDateString()
          }}</time>
        </small>
      </div>
    </div>
    <div class="flex items-center mb-1">
      <div class="">
        <n-rate size="large" allow-half :value="review.rating" readonly />
      </div>
    </div>
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"></footer>
    <p class="mb-2 text-gray-800">{{ review.body }}</p>
  </article>
</transition>
</template>

<script setup>
import Pop from "~~/utils/Pop.js";

const { data: user } = useSession();
const productStore = useProductStore();
const isShowing = ref(false);
const props = defineProps({
  review: { type: Object, required: true },
});
async function removeReview() {
  try {
    await productStore.removeReview(props.review.id);
  } catch (error) {
    Pop.error(error);
  }
}
// onMounted(()=>{
//   document.querySelectorAll('.review-card').forEach(r=> r.classList.add('active'))
// })

</script>

<style lang="scss" scoped>



.avatar {
  @apply rounded-lg w-20;
}
.icon {
  transition: transform 0.5s ease;
}
.icon:hover {
  transform: rotate(180deg);
  transition: transform 0.5s ease;
}
</style>
