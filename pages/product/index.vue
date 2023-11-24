<script lang="ts" setup>
  import { useProductsStore } from "~/stores/products";

  const productStore = useProductsStore();
  const allProducts = ref([]);

  productStore.getAllProducts().then(() => {
    allProducts.value = productStore.products;
  });

  const selectedCategory = ref("");

  const categoryStore = useCategoryStore();
  const { categories } = storeToRefs(categoryStore);
  categoryStore.getAllCategory();

  const sortListProduct = computed(() => {
  if (!selectedCategory.value) {
    return allProducts.value; 
  } else {
    // ignore the fkin error here !
    return allProducts.value.filter(product => product.category === selectedCategory.value);
  }
});

// TODO 
// 1. sorting a list product on dropdwn components
// 2. fix the undefined variable, (problem: get value variable didnt declared scope)
// 3. detail product showed on path variable by id

definePageMeta({
  middleware: ["user-access"]
});

</script>

<template>
  <div class="header">
    <Header />
  </div>

  <section>
    <div class="container">
      <div class="py-10">
        <h1 class="text-4xl font-bold pt-7">Products</h1>
        <div class="py-10">
          <div class="mb-6 flex justify-end gap-6">
            <Dropdown @selected-category="selectedCategory = $event" />
            <NuxtLink to="/category/create"
              class="bg-slate-700 text-white flex justify- center items-center px-3 rounded-lg hover:bg-slate-500">Create
              New Category</NuxtLink>
            <NuxtLink to="/product/create"
              class="bg-green-200 text-green-700 flex justify-center items-center px-3 rounded-lg border border-green-700 hover:bg-green-500 hover:text-white">Create Products</NuxtLink>
          </div>
          <div class="flex gap-6 flex-wrap mx-auto">
            <template v-for="(item, index) in sortListProduct" :key="index">
              <CardsCardProduct :product="item" class="w-[calc(100%/4-18px)]" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="footer mt-auto p-20">
    <Footer />
  </div>
</template>
