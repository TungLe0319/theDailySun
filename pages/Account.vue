<template>
  <div class="mt-18">
    <div class="relative hero-image-container">
      <img class="hero-image" src="https://images.unsplash.com/photo-1525275295302-38fe248cf44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80" alt="hero image">
      <div class="hero-text mt-10">
        <h1 class=" text-8xl text-shadow-overlay">
          Account
        </h1>
      </div>
      <div class="justify-center flex absolute flex-col  profile-image">
        <img class=" rounded-full shadow-xl shadow-slate-400  " :src="data?.user?.image||'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'" alt="hero image" width="300">
      </div>
    </div>
    <div class="container mt-3 text-xl flex flex-col  relative">
      <div class="flex justify-evenly  mt-24">
        <div class=" mt-32">
          <div>
            <h1 class="text-4xl ">
              Welcome @{{ data?.user?.name }} !
            </h1>
          </div>
          <h3 class="t ">
            {{ data?.user?.email }} !
          </h3>
          <button class="rounded-xl shadow-xl p-2 m-2 bg-red-500 text-4xl px-5" @click="signOut({callbackUrl: '/'})">
            sign out
          </button>
        </div>
      </div>

      <div class="my-24"> {{ userData }} testing </div>
      <CreateProduct/>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
const userData = ref({})
const { data, signOut } = useSession()
onMounted(()=>{
  setTimeout(() => {
getUserData()
  }, 1);
})
async function getUserData(){
  const res= await  useFetch('/api/user/:id')
  userData.value = res.data
}

</script>

<style>

.profile-image{
 top: 80%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 99999 !important;
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
