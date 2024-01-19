<template>
  <AuthenticatedLayout>
    <div class="container mx-auto p-8">
      <div class="my-3 border border-gray-600">breadcrumbs</div>
      <div class="product-detail flex p-8 gap-5">
        <!-- left -->
        <div class="w-6/12 border border-gray-600">
          <div class="main-image">image main</div>
          <div class="image-list">image list</div>
        </div>
        <!-- right -->
        <div class="w-6/12 border border-gray-600">
          <h2>HARIO CAFE PRESS SLIM GREY 240ML</h2>
          <p>UbruKopi</p>
          <div class="flex gap-1">
            <img src="#" alt="star" v-for="star in 5" :key="star" />
          </div>
          <div class="flex justify-between gap-2">
            <h4>Rp 480.000</h4>
            <a href="#">tersedia</a>
          </div>
          <div class="flex gap-2">
            <div class="qty">
              <button
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                -
              </button>
              <input
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                type="number"
              />
              <button
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                +
              </button>
            </div>
            <button class="px-3 py-2 border border-gray-600">
              Tambah ke keranjang
            </button>
            <button class="px-3 py-2 border border-gray-600">love</button>
          </div>
        </div>
      </div>
      <div class="description w-full border border-gray-600 min-h-72 mb-5">
        deskripsi & informasi
      </div>
      <div class="recomendation w-full border border-gray-600 min-h-72">
        rekomendasi list
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { onMounted, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout.vue";
import { useStoreProduct } from "../../stores/storeProduct";
import { useStoreAuth } from "../../stores/storeAuth";

const route = useRoute();
const storeProduct = useStoreProduct();
const storeAuth = useStoreAuth();

watchEffect(() => {
  if (storeAuth.user.name) {
    storeAuth.isTokenAvailable = true;
  } else {
    storeAuth.isTokenAvailable = false;
  }
});
storeAuth.checkTokenAvailability();
const params = reactive({
  keyword: "",
  price_from: 10000,
  price_to: 250000,
  page: 1,
  limit: 10,
  orderBy: "product_name",
  sort: "ASC",
});

storeAuth.checkTokenAvailability();
storeProduct.getProductDetail(route.params.id);
</script>

<style scoped></style>
