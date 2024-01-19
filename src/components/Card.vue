<template>
  <div
    class="max-w-md bg-white p-3 rounded-md shadow-md border border-gray-600 text-center"
  >
    <div class="relative group">
      <img
        :src="product.images[0].image_url"
        alt="Product Image"
        class="w-full h-48 object-cover mb-4 rounded-md z-1"
      />
      <div
        class="absolute rounded-full flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-gray-500 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button class="px-4 py-2 hover:scale-105">like</button>
        <button class="px-4 py-2 hover:scale-105">shop</button>
      </div>
    </div>
    <RouterLink
      :to="`/product/${product.id}`"
      class="text-xl font-semibold mb-2 cursor-pointer"
    >
      {{ truncate(product.name, 23) }}
    </RouterLink>
    <p class="text-gray-600">{{ product.product_type.name }}</p>
    <div class="stars">stars</div>
    <h4 class="text-gray-700">{{ storeProduct.formatPrice(product.price) }}</h4>
  </div>
</template>

<script setup>
import { useStoreProduct } from "../stores/storeProduct";

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
