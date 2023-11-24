<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const isAuthenticated = ref();
const router = useRouter();
isAuthenticated.value = useCookie("access_token").value;
const logout = async () => {
  await authStore.logout();
  const accessToken = useCookie("access_token");
  const refreshToken = useCookie("refresh_token");
  accessToken.value = null;
  refreshToken.value = null;
  setTimeout(() => {
    isAuthenticated.value = useCookie("access_token").value;
  }, 100);
  router.push({
    path: "/",
  });
};
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-700">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a class="flex items-center">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Paung</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-700 dark:border-gray-700"
        >
          <li>
            <nuxt-link
              to="/"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/about"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >About</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/product"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Products</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/cart"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Cart</nuxt-link
            >
          </li>
          <li>
            <!-- <nuxt-link to="/login" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Login</nuxt-link> -->
            <!-- <NuxtLink
              to="/login"
              class="text-base bg-blue-600 px-6 py-2 text-white rounded-lg hover:bg-blue-600/80"
              >Login</NuxtLink
            > -->
            <NuxtLink
              v-if="!isAuthenticated"
              to="/login"
              class="text-base bg-blue-600 px-6 py-2 text-white rounded-lg hover:bg-blue-600/80"
              >Login</NuxtLink
            >
            <div
              v-else
              class="text-base cursor-pointer bg-red-600 px-6 py-2 text-white rounded-lg hover:bg-red-600/80"
              @click="logout"
            >
              Logout
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
