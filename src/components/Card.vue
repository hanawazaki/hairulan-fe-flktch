<template>
  <div class="max-w-md bg-white px-3 py-4 rounded-md shadow-md text-center">
    <div class="relative group mb-[21px]">
      <img
        :src="product.images[0].image_url"
        alt="Product Image"
        class="w-full object-cover mb-4 rounded-md z-1"
      />
      <div
        class="absolute flex justify-between w-7/12 rounded-full flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#f4f4f4] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button class="px-4 py-2 hover:scale-105"><Lovesvg /></button>
        <button class="px-4 py-2 hover:scale-105"><Shopsvg /></button>
      </div>
    </div>
    <div class="flex flex-col gap-[10px]">
      <RouterLink
        :to="`/product/${product.id}`"
        class="text-xl font-bold text-customGray2 cursor-pointer"
      >
        {{ truncate(product.name, 20) }}
      </RouterLink>
      <h6 class="text-base font-medium text-customGray2">
        {{ product.product_type.name }}
      </h6>
      <div class="stars flex justify-center gap-[2px] items-center">
        <Starsvg :width="10" :height="10" v-for="star in 5" :key="star" />
        <label class="text-[10px] text-[#868686] font-normal">(7)</label>
      </div>
      <h6 class="text-customOrange font-medium text-lg">
        {{ storeProduct.formatPrice(product.price) }}
      </h6>
    </div>
  </div>
</template>

<script setup>
import { useStoreProduct } from "../stores/storeProduct";
import Starsvg from "./svg/Starsvg.vue";
import Lovesvg from "./svg/lovesvg.vue";
import Shopsvg from "./svg/shopsvg.vue";
const storeProduct = useStoreProduct();
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const truncate = (text, max) => {
  return text.length > max ? text.slice(0, max - 3) + "...." : text;
};
</script>

<style lang="scss" scoped></style>
