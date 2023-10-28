<script lang="ts" setup>
const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>
<template>

  <div class="bg-white shadow-xl p-6 rounded-xl flex gap-4 items-center">
    <div class="h-[150px] w-[130px] bg-gray-300 rounded-xl p-3">
      <img :src="props.product.image" class="h-full w-full object-contain" />
    </div>
    <div class="w-full">
      <h5 class="text-xl font-semibold mb-2">{{ props.product.name }}</h5>
      <p class="text-lg font-light mb-3">${{ props.product.price }}</p>
      <div class="flex items-center justify-between">
        <div
          class="flex items-center border border-gray-300 w-max rounded- full"
        >
          <button
            class="cursor-pointer py-1 pl-4 pr-2 text-lg flex items- center justify-center"
          >
            -
          </button>

          <div class="py-1 px-2 text-lg flex items-center justify- center">
            1
          </div>

          <button
            class="cursor-pointer py-1 pl-2 pr-4 text-lg flex items- center justify-center"
          >
            +
          </button>
        </div>
        <div class="flex items-center gap-2 px-3 py-2 rounded-
          full cursor-pointer bg-white rounded-md hover:bg-red-300 border border-red-500" @click="$emit('removeCart', props.product.id)">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f01707" d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5Zm2-2v2h6V4H9Z"/></svg>
          <span class="text-red-500 font-bold ">Delete</span>
          
          </div>
      </div>
    </div>
  </div>
</template>
