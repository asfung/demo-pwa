<script lang="ts" setup>
    import { products } from '~/composables/constants/products';
    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'

    document.title = "Products"

    const allProducts = ref(products);
</script>
<template>
  <div class="header">
    <Header />
  </div>

  <section>
    <div class="container">
      <h1 class="text-4xl font-bold pt-7">Products</h1>
      <div class="py-10">
        <div class="flex gap-6 flex-wrap mx-auto">
          <template v-for="(item, index) in allProducts" :key="index">
              <CardsCardProduct :product="item" class="w-[calc(100%/4-18px)]"/>
          </template>
        </div>
      </div>
    </div>
  </section>

  <div class="footer mt-auto p-20">
    <Footer />
  </div>
</template>