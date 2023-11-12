<script lang="ts" setup>
  import { products } from "~/composables/constants/products";
  import { ProductsType } from "~/types/ProductsType";
  import { useProductsStore } from "~/stores/products";

  const route = useRoute();
  const id = typeof route.params.id === "string" ? parseInt(route.params.id) : null;

  const product = ref(products.find((item: ProductsType) => item.id === id));

  document.title = `${product.value?.name} | ${product.value?.description}`;

  const findProduct = ref(useProductsStore)

</script>

<template>
  <DetailProduct :product="product" />
</template>
