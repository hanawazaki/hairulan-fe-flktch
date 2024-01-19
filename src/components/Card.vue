<template>
  <div
    class="max-w-md bg-white p-8 rounded-md shadow-md border border-gray-600"
  >
    <img
      :src="product.images[0].image_url"
      alt="Product Image"
      class="w-full h-48 object-cover mb-4 rounded-md"
    />
    <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
    <p class="text-gray-600">{{ product.product_type.name }}</p>
    <div class="mt-4 flex justify-between items-center">
      <span class="text-gray-700">{{
        storeProduct.formatPrice(product.price)
      }}</span>
    </div>
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
</script>

<style lang="scss" scoped></style>
