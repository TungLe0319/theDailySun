<template>
  <div>
    <div class="relative hero-image-container">
      <div class="hero-text bg-black bg-opacity-25 p-5 rounded-md">
        <h1 class="text-8xl text-shadow-overlay">
          Thank you for shopping with us!
        </h1>
        <button
          class="text-4xl bg-green-400 p-2 rounded-md mt-3"
          @click="goToReceipt()"
        >
          View Receipt
        </button>
      </div>
    </div>
  </div>
</template>
e>

<script setup>
const route = useRoute();
const router = useRouter();
let receiptURL = ref("");
let receiptId = ref("");

onMounted(()=>{
 setTimeout(() => {
  getSessionById();
 }, 1);
})
async function getSessionById() {
  const id = route.query.session_id;

  if (!id) {
    router.push("account");
  }

  const stripeSession = await useFetch(`/api/stripe/${id}`, {
    method: "GET",
  });
  receiptURL.value = stripeSession?.data?.value?.receipt_url;
  receiptId.value = stripeSession?.data?.value?.id;

  updateUserReceipt(receiptURL.value, receiptId.value);
}


async function goToReceipt() {
  navigateTo(receiptURL.value, { external: true });
}

async function updateUserReceipt(receiptUrl, receiptId) {
  const {data} = useSession()
  let id = data?.value?.user?.id
  await useFetch(`/api/user/${id}`, {
    method: "put",
    body: {
      receiptUrl,
      receiptId,
    },
  });
}

</script>
<style lang="scss" scoped>
.hero-image-container {
  height: 100vh;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1479064312651-24524fb55c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80);
  background-position: center;
  background-attachment: fixed;
}
.hero-image-container::before {
  content: "";
  position: absolute;
  bottom: 0;
  z-index: 1999;
  left: 0;
  width: 100%;
  height: 10px; /* adjust height as per your need */
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    #fff
  ); /* adjust the color as per your need */
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: #fff;
}

.text-shadow-overlay {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
