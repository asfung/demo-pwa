<script lang="ts" setup>
import { ProductsType } from "~/types/ProductsType";

const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});

const oneProduct = ref(props.product);

const addCart = () => {
  oneProduct.value.isCart = !oneProduct.value.isCart;
  let localStorageData = localStorage.getItem("products");
  let productOfCart: ProductsType[] = [];
  if (localStorageData) {
    productOfCart = JSON.parse(localStorageData);
  }
  if (oneProduct.value.isCart) {
    productOfCart.push(oneProduct.value);
    localStorage.setItem("products", JSON.stringify(productOfCart));
  } else {
    productOfCart = productOfCart.filter(
      (item) => item.id !== oneProduct.value.id
    );
    localStorage.setItem("products", JSON.stringify(productOfCart));
  }
};

</script>

<template>
  <section class="bg-white shadow-xl rounded-xl overflow-hidden">
    <div :class="`w-full h-[200px] p-5 bg-gray-300`">
      <img :src="oneProduct.image" class="w-full h-full object-contain" />
    </div>
    <div class="px-5 pb-5 pt-9 relative">
      <NuxtLink :to="`/product/${oneProduct.id}`"
        ><h3 class="text-lg font- bold mb-4 text-limit limit-2">
          {{ oneProduct.name }}
        </h3></NuxtLink
      >

      <div class="flex justify-between items-center">
        <span class="text-sm font-normal">{{ oneProduct.category }}</span>
        <span class="text-sm font-normal">${{ oneProduct.price }}</span>
      </div>
      <div
        :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px]
${oneProduct.isCart ? 'bg-slate-600 text-white' : 'bg-white'} shadow-xl

rounded-full flex justify-center items-center hover:bg-slate-500 hover:text-
white transition duration-300`"
        @click="addCart"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.004 6.417L.762 3.174L2.176 1.76l3.243 3.242H20.66a1 1 0 0 1 .958 1.288l-2.4 8a1 1 0 0 1-.958.712H6.004v2h11v2h-12a1 1 0 0 1-1-1V6.417Zm2 .585v6h11.512l1.8-6H6.004Zm-.5 16a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm12 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"/></svg>
      </div>
    </div>
  </section>
</template>
