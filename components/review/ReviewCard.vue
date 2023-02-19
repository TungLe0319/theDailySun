<template>


<article class="shadow-xl bg-sky-100 p-2 rounded-lg  my-3">
    <div class="flex items-center mb-4 space-x-4 ">
        <img class="w-10 h-10 rounded-full" :src="review?.user?.image" alt="">
        <div class="space-y-1 font-medium">
            <p>{{review.user.name}}</p>

        </div>
    </div>
    <div class="flex items-center mb-1">

   <div class="">
          <n-rate size="large" allow-half :value="review.rating" readonly />
        </div>
    </div>
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed  on <time datetime="2017-03-03 19:00">{{new Date(review.createdAt).toLocaleDateString()}}</time></p></footer>
    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">{{review.body}}</p>

    <!-- <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a> -->
    <!-- <aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
            <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
        </div>
    </aside> -->
</article>


</template>

<script>
export default {
  props: {
    review: { type: Object, required: true }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.review-card{
@apply bg-zinc-900 text-white rounded-md flex justify-between
}

.avatar{
  @apply rounded-lg w-20
}
</style>
