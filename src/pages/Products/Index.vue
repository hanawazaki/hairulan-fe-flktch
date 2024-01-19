<template>
  <AuthenticatedLayout>
    <div class="container mx-auto">
      <div class="my-3 border border-gray-600">breadcrumbs</div>
      <div class="flex">
        <!-- left -->
        <div class="w-3/12 pr-8">
          <div class="bg-white p-4 rounded shadow border border-gray-600">
            <h2 class="text-xl font-semibold mb-4">Filter Sidebar</h2>
            <div class="mb-5 flex flex-col gap-3">
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
          </div>
        </div>
        <!-- right -->
        <div
          v-if="storeProduct.loading == true"
          class="flex justify-center items-center h-screen"
        >
          <h2>LOADING....</h2>
        </div>
        <div class="w-9/12 border border-gray-600" v-else>
          <div class="flex justify-between gap-3 py-5">
            <div class="flex justify-between gap-2 items-center">
              menampilkan
              <select name="" id="" class="border border-gray-600">
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
              </select>
              dari {{ storeProduct.products.total }}
            </div>
            <div class="flex">
              <select name="" id="" class="border border-gray-600">
                <option value="product-asc">Product name ASC</option>
                <option value="product-desc">Product name DESC</option>
                <option value="price-asc">Price ASC</option>
                <option value="price-desc">Price Desc</option>
                <option value="date-asc">Date ASC</option>
                <option value="date-desc">Date Desc</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              :product="product"
              v-for="(product, index) in paginatedItems"
              :key="index"
            />
          </div>
          <Pagination
            :total="storeProduct.products.total"
            :itemsPerpage="perPage"
            v-model:current-page="currentPage"
            @update:current-page="handleChangepage"
            class="my-[55px]"
          />
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout.vue";
import { ref, onMounted, reactive, watchEffect, computed } from "vue";
import { useStoreProduct } from "../../stores/storeProduct";
import { useStoreAuth } from "../../stores/storeAuth";
import { useRouter } from "vue-router";
import Card from "../../components/Card.vue";
import Pagination from "../../components/Pagination.vue";

const storeAuth = useStoreAuth();
const storeProduct = useStoreProduct();

const price_from = ref("");
const price_to = ref("");
const orderBy = ref("product_name");
const sort = ref("ASC");

const params = reactive({
  keyword: "",
  price: "",
  page: 1,
  limit: 10,
  order: `${orderBy.value},${sort.value}`,
});

const perPage = ref(6);
const currentPage = ref(1);

watchEffect(() => {
  if (storeAuth.user.name) {
    storeAuth.isTokenAvailable = true;
  } else {
    storeAuth.isTokenAvailable = false;
  }
  storeAuth.checkTokenAvailability();
});

const handleSorting = (param) => {
  console.log(param);
  params.sort = param;
};

storeAuth.checkTokenAvailability();

storeProduct.getProducts(params);

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;

  return storeProduct.products.list.slice(start, end);
});

const handleChangepage = (page) => {
  // console.log("change to page", page);
  currentPage.value = page;
};
</script>

<style lang="scss" scoped></style>
