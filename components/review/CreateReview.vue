<template>
  <div class="">
    <form @submit.prevent="handleSubmit()">
      <div
        class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-zinc-700 dark:border-zinc-600"
      >
        <div class="px-4 py-2  rounded-t-lg dark:bg-zinc-800">
          <label for="comment" class="sr-only">Your comment</label>
          <textarea
            v-model="body"
            id="comment"
            rows="4"
            class="text-md w-full p-2  text-gray-900 bg-white border-0 dark:bg-zinc-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a review..."
            required
          ></textarea>
        </div>
        <div
          class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600"
        >

        <div class=" flex gap-x-3">
          <n-rate required size="large" allow-half @update:value="value" />
          <div class=" text-white text-lg">
            {{ rating }}
          </div>
        </div>
          <button
            type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Review
          </button>

        </div>
      </div>
    </form>

  </div>
</template>

<script setup>

let body = ref("");
const productStore = useProductStore();
const rating = ref(0.0)

const reviewData = computed(() => {
  const reviewData = {
    product: productStore.activeProduct,
    body: body.value,
    rating:rating.value
  };
  return reviewData;
});
 const value = (event) => {
  rating.value = event
  console.log(rating.value);
 }
const props = defineProps({
  product: { typeof: Object },
});

onMounted(() => {
  setTimeout(() => {}, 1);
});
async function handleSubmit() {
  const res = await useFetch("/api/reviews", {
    method: "POST",
    body: {
      reviewData,
    },
  });
// console.log(productStore.activeProduct.reviews);
// console.log(res.data.value);
  productStore.activeProduct.reviews.push(res.data.value)
  body.value = ''
}
</script>

<style scoped lang="scss"></style>
