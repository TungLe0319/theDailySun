<template>
  <footer class="bg-zinc-900 text-white">
    <div class="w-full pt-10 flex items-center justify-center bg-zinc-900">
      <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div class="md:flex">
          <h1 class="text-6xl font-bold w-full md:w-1/2">
            Thank you for checking out our app. Get in touch with us.
          </h1>

          <div
            class="w-full md:w-1/2 footer-section flex justify-center flex-col items-center"
          >
            <div class="mt-8 flex">
              <img
                src="https://avatars.githubusercontent.com/u/107594367?s=400&u=279c4a706755639789d6b825966e54161df0c7aa&v=4"
                alt=""
                width="60"
                class="rounded-full shadow-md"
              />

              <div class="ml-5 flex gap-5 items-center">
                <a href="https://www.linkedin.com/in/tung-le0319/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt=""
                    width="30"
                    height="30"
                  />
                </a>
                <div class="">
                  <a href="https://github.com/TungLe0319">
                    <img
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsocial-media-and-logos-11%2F32%2FLogo_Github-512.png&f=1&nofb=1&ipt=6cc9a130a9bb53997e07157eac5064ae54cdf9af88484f7a3e634e9bf6cf5f54&ipo=images"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </a>
                </div>
              </div>
            </div>

            <!-- SECTION DANIEL -->
            <div class="mt-4 flex">
              <img
                src="https://avatars.githubusercontent.com/u/107774403?v=4"
                alt=""
                width="60"
                class="rounded-full shadow-md"
              />

              <div class="ml-5 flex gap-5 items-center">
                <a href="https://www.linkedin.com/in/daniel-le97/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt=""
                    width="30"
                    height="30"
                  />
                </a>
                <a href="https://github.com/daniel-le97">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsocial-media-and-logos-11%2F32%2FLogo_Github-512.png&f=1&nofb=1&ipt=6cc9a130a9bb53997e07157eac5064ae54cdf9af88484f7a3e634e9bf6cf5f54&ipo=images"
                    alt=""
                    width="30"
                    height="30"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex mt-8 flex-col md:flex-row md:justify-center md:text-center"
        >
          <p class="w-full md:w-2/3 text-gray-400">
            If you want to contact us the best way is to connect with us on
            LinkedIn and message us!
          </p>
        </div>
        <div class="flex flex-col">
          <div class="flex mt-24 mb-5 flex-row justify-between items-end">
            <div class="hidden md:block">
              <img
                src="../assets/Logo.png"
                alt=""
                width="80"
                class="rounded-xl b"
              />
            </div>

            <NuxtLink to="/products" class="link" active-class="active-link">
              Products
            </NuxtLink>
            <NuxtLink to="/about" class="link" active-class="active-link">
              About
            </NuxtLink>

            <nuxt-link to="/Account" class="link" active-class="active-link">
              Account
            </nuxt-link>
            <nuxt-link to="/cart" class="link" active-class="active-link">
              Cart
            </nuxt-link>
          </div>
          <hr class="border-gray-600" />

          <h1 class="text-center text-gray-300 my-10">
            ©2022 DevOpportunitiesLLC All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>


.footer-section {
  flex: 1;
}

.link {
  width: fit-content;
  height: fit-content;
  @media only screen and (max-width: 768px) {
    font-size: 16px !important;
  }
}
</style>
