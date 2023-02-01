<template>
  <div class="mt-18">
    <div class="relative hero-image-container">
      <img
        class="hero-image"
        src="https://images.unsplash.com/photo-1525275295302-38fe248cf44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80"
        alt="hero image"
      >
      <div class="hero-text mt-10">
        <h1 class="text-8xl text-shadow-overlay">
          Account
        </h1>
      </div>
      <div class="justify-center flex absolute profile-image">
        <img
          class="rounded-full shadow-xl shadow-slate-400"
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="hero image"
          width="300"
        >
      </div>
    </div>
    <div class="container mt-3 text-xl flex flex-col relative">
      <div class="flex justify-evenly mt-52">
        <div class="">
          <img
            src="https://strapi-nuxt.apps.devopportunities.dev/admin/70674f63fc3904c20de0.svg"
            alt="nuxt icon"
            width="200"
          >
        </div>
        <div class="">
          <img
            src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
            alt="tailwind icon"
            width="200"
          >
        </div>
      </div>
      <div class="">
        <h2>
          The SunnyVibes project is an e-commerce application built using the
          Nuxt.js framework, using Strapi as the headless CMS to handle the
          management of our product catalog, Tailwind CSS to provide a clean,
          minimalist design aesthetic and Stripe as .
          <br>
        </h2>

        <div class="my-5">
          <div class="flex justify-center my-4">
            <h3
              class="text-center text-3xl p-4 rounded-md border-4 w-1/2 border-slate-900"
            >
              Our goal with this project
            </h3>
          </div>
          <ul class="  ">
            <li class="list-item">
              Challenge ourselves in learning Nuxt.js, capitalizing on prior
              experience with Vue.js
            </li>
            <li class="list-item">
              Build an e-commerce app with an actual payment system, utilizing
              Stripe for payments
            </li>
            <li class="list-item">
              Experiment with Strapi as a headless CMS and explore its potential
              for our e-commerce app
            </li>
            <li class="list-item">
              Practice and improve our problem-solving and development skills
              while working on this project
            </li>
            <li class="list-item">
              Creating a seamless and intuitive e-commerce experience for users
            </li>
            <li class="list-item">
              Leverage the power of Nuxt.js and Strapi to create a performant,
              scalable, and maintainable e-commerce platform
            </li>
            <li class="list-item">
              Learn about the best practices for building e-commerce application
            </li>
            <li class="list-item">
              Explore the features of Nuxt.js and Strapi that we haven't used
              before
            </li>
            <li class="list-item">
              Use this project as an opportunity to learn new technologies and
              improve our development skills
            </li>
            <li class="list-item">
              Showcase our skills and deliver a high-quality e-commerce
              application
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
e>

<script>
export default {
  setup () {
    // const userStore = useUserStore()
    return {
      // user: computed(() => userStore.user)
    }
  }
}
</script>

<style>
.profile-image {
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
