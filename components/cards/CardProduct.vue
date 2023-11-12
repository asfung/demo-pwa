<script lang="ts" setup>

const props = defineProps({
  product: {
    type: Object,
    default: {},
  }
});

const { baseStorageUrl } = useAppConfig();

// troubleshooting
// console.log(baseStorageUrl + "/" + props.product.image);
// console.log(`/product/${props.product.id}`)


</script>

<template>
  <section class="bg-white shadow-xl rounded-xl overflow-hidden">
    <div :class="`w-full h-[200px] p-5 bg-gray-300`">
      <img :src="baseStorageUrl + `/${props.product.image}`" class="w-full h-full
 object-contain" />
    </div>
    <div class="px-5 pb-5 pt-9 relative">
      <NuxtLink :to="`/product/${props.product.id}`">
        <h3 class="text-lg fontbold mb-4 text-limit limit-2">{{ props.product.name }}</h3>
      </NuxtLink>
      <div class="flex justify-between items-center">
        <span class="text-sm font-normal">{{ props.product.category }}</span>
        <span class="text-sm font-normal">${{ props.product.price }}</span>
      </div>
      <div :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px]
 ${props.product.isCart ? 'bg-blue-600 text-white' : 'bg-white'} shadow-xl
 rounded-full flex justify-center items-center hover:bg-blue-600 hover:text-white
 transition duration-300`">
        <!-- <i class="ri-shopping-cart-2-line"></i> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.004 6.417L.762 3.174L2.176 1.76l3.243 3.242H20.66a1 1 0 0 1 .958 1.288l-2.4 8a1 1 0 0 1-.958.712H6.004v2h11v2h-12a1 1 0 0 1-1-1V6.417Zm2 .585v6h11.512l1.8-6H6.004Zm-.5 16a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm12 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"/></svg>
      </div>
    </div>
  </section>
</template>