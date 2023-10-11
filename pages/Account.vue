<template>
  <div class="mt-18">
    <div class="relative hero-image-container">
      <img
        class="hero-image"
        src="https://images.unsplash.com/photo-1536633125620-8a3245c11ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1589&q=80"
        alt="hero image"
      />
      <div class="hero-text">
        <h1 class="text-8xl text-shadow-overlay">Account</h1>
      </div>
      <div class=" profile-image-container">
        <img
          class="rounded-full shadow-xl shadow-slate-400 w-1/2 h-1/2"
          :src="
            data.user?.image ||
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
          "
          alt="hero image"
          width="300"
        />
      </div>
    </div>
    <div class="container mt-3 text-xl flex flex-col relative">
      <div class="flex justify-evenly mt-24">
        <div class="mt-24">
          <div>
            <h1 class="text-4xl">Welcome @{{ data.user?.name }} !</h1>
          </div>
          <h3 class="text-center mt-3">
            {{ data.user?.role }}
          </h3>
          <div class="flex justify-center mt-10">
            <button
              class="rounded-xl shadow-xl p-2 m-2 bg-zinc-800 text-white text-2xl px-5 hover:bg-opacity-90 transition-all"
              @click="signOut({ callbackUrl: '/' })"
            >
              SIGN OUT
            </button>
          </div>
        </div>
      </div>

      <CreateProduct />

      <div class="container flex flex-col" v-if="receipts.length">
        <h1 class="my-8 text-6xl text-center text-shadow">Receipt History</h1>

        <div class="flex gap-3">
          <ReceiptCard v-for="r in receipts" :receipt="r" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { status, data, signOut } = useAuth();
// import { useSession,signOut,getSession } from "next-auth/react"
definePageMeta({ middleware: "auth" });
const userData = ref({});
const receipts = ref([]);
const role = ref("");

onMounted(() => {
  setTimeout(() => {
    getUserData();
  }, 1);
});
async function getUserData() {
  const res = await useFetch("/api/user/:id");
  userData.value = res?.data?.value;
  receipts.value = res?.data.value?.receipts;
  role.value = res?.data.value?.role;
}
</script>

<style scoped lang="scss">
.profile-image-container {
  @apply justify-center flex absolute flex-col;
  top: 85%;
  left: 50%;
  transform: translate(-25%, -30%);
  z-index: 100000 !important;
}
.hero-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;
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
