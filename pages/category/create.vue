<script lang="ts" setup>
  import navbar from "~/components/Header.vue";
  import footer from "~/components/Footer.vue";

  document.title = "Create New Category";
</script>

<template>
  <navbar />
  <section>
    <div class="container pt-7">
      <NuxtLink to="/product" class="text-4xl ml-52"><button class="underline">Back</button></NuxtLink>
      <FormsCategoryForm />
    </div>
  </section>
  <footer />
</template>

