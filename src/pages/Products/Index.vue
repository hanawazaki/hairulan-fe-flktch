<template>
  <div>
    <button class="px-4 py-2 border border-gray-600" @click="handleLogout">
      Logout
    </button>
  </div>
  <div class="mb-5">
    <input
      type="number"
      v-model="params.price_from"
      class="border border-gray-600"
    />
    <input
      type="number"
      v-model="params.price_to"
      class="border border-gray-600"
    />
  </div>
  <div class="flex gap-3">
    <button
      class="px-4 py-2 border border-gray-600"
      @click="handleSorting('ASC')"
    >
      ASC
    </button>

    <button
      class="px-4 py-2 border border-gray-600"
      @click="handleSorting('DESC')"
    >
      DESC
    </button>
  </div>
  <div class="flex justify-between gap-3 mt-6">
    <div
      v-for="(product, index) in storeProduct.products"
      :key="index"
      class="border border-gray-600 flex flex-col"
    >
      <label>{{ product.name }}</label>
      <label>{{ product.price }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, watchEffect } from "vue";
import { useStoreProduct } from "../../stores/storeProduct";
import { useStoreAuth } from "../../stores/storeAuth";
import { useRouter } from "vue-router";

const storeAuth = useStoreAuth();
const storeProduct = useStoreProduct();
const params = reactive({
  keyword: "",
  price_from: 10000,
  price_to: 250000,
  page: 1,
  limit: 10,
  orderBy: "product_name",
  sort: "ASC",
});
const isTokenAvailable = ref(false);
const router = useRouter();
const checkTokenAvailability = () => {
  const token = localStorage.getItem("token");
  isTokenAvailable.value = !!token;
};

watchEffect(() => {
  if (storeAuth.user.name) {
    isTokenAvailable.value = true;
  } else {
    isTokenAvailable.value = false;
  }
  checkTokenAvailability();
});

const handleSorting = (param) => {
  console.log(param);
  params.sort = param;
};

const handleLogout = () => {
  localStorage.removeItem("token");
  isTokenAvailable.value = false;
  router.push("/login");
};

onMounted(() => {
  checkTokenAvailability();
  storeProduct.getProducts(params);
});
</script>

<style lang="scss" scoped></style>
