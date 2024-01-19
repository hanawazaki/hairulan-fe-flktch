<template>
  <AuthenticatedLayout>
    <div class="mx-auto bg-white px-[70px]">
      <Breadcrumbs />
      <div class="flex">
        <!-- left -->
        <div class="w-3/12 pr-8">
          <div class="bg-white">
            <!-- accordion1 -->
            <div class="accordion">
              <div class="border mb-2 rounded">
                <div
                  class="flex justify-between items-center p-4 cursor-pointer bg-[#f5f5f5]"
                  @click="toggleAccordionItem1"
                >
                  <span class="text-lg font-normal text-customGray2"
                    >Origin</span
                  >
                  <svg
                    v-if="!accordionItem1"
                    class="w-6 h-6 transform rotate-0 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                  <svg
                    v-else
                    class="w-6 h-6 transform rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <div v-if="accordionItem1" class="p-4">
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Aceh</label>
                    </div>
                    <span class="ml-auto">(8)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Semarang</label>
                    </div>
                    <span class="ml-auto">(2)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Bandung</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Jawa</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Amerika Selatan</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Lain - lain</label>
                    </div>
                    <span class="ml-auto">(8)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- accordion2 -->
            <div class="accordion">
              <div class="border mb-2 rounded">
                <div
                  class="flex justify-between items-center p-4 cursor-pointer bg-[#f5f5f5]"
                  @click="toggleAccordionItem2"
                >
                  <span class="text-lg font-normal text-customGray2"
                    >Species</span
                  >
                  <svg
                    v-if="!accordionItem2"
                    class="w-6 h-6 transform rotate-0 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                  <svg
                    v-else
                    class="w-6 h-6 transform rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <div v-if="accordionItem2" class="p-4">
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Arabika</label>
                    </div>
                    <span class="ml-auto">(8)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Robusta</label>
                    </div>
                    <span class="ml-auto">(2)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Blend</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- accordion3 -->
            <div class="accordion">
              <div class="border mb-2 rounded">
                <div
                  class="flex justify-between items-center p-4 cursor-pointer bg-[#f5f5f5]"
                  @click="toggleAccordionItem3"
                >
                  <span class="text-lg font-normal text-customGray2"
                    >Roast Level</span
                  >
                  <svg
                    v-if="!accordionItem3"
                    class="w-6 h-6 transform rotate-0 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                  <svg
                    v-else
                    class="w-6 h-6 transform rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <div v-if="accordionItem3" class="p-4">
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Light Roast</label>
                    </div>
                    <span class="ml-auto">(8)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Medium Roast</label>
                    </div>
                    <span class="ml-auto">(2)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Dark Roast</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1"
                        >Light to Medium Roast</label
                      >
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- accordion4 -->
            <div class="accordion">
              <div class="border mb-2 rounded">
                <div
                  class="flex justify-between items-center p-4 cursor-pointer bg-[#f5f5f5]"
                  @click="toggleAccordionItem4"
                >
                  <span class="text-lg font-normal text-customGray2"
                    >Tasted</span
                  >
                  <svg
                    v-if="!accordionItem4"
                    class="w-6 h-6 transform rotate-0 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                  <svg
                    v-else
                    class="w-6 h-6 transform rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <div v-if="accordionItem4" class="p-4">
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Sweet</label>
                    </div>
                    <span class="ml-auto">(8)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Floral</label>
                    </div>
                    <span class="ml-auto">(2)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Fruity</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Spices</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Cocoa</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Nutty</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- accordion5 -->
            <div class="accordion">
              <div class="border mb-2 rounded">
                <div
                  class="flex justify-between items-center p-4 cursor-pointer bg-[#f5f5f5]"
                  @click="toggleAccordionItem5"
                >
                  <span class="text-lg font-normal text-customGray2"
                    >Processing</span
                  >
                  <svg
                    v-if="!accordionItem4"
                    class="w-6 h-6 transform rotate-0 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                  <svg
                    v-else
                    class="w-6 h-6 transform rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <div v-if="accordionItem5" class="p-4">
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Natural</label>
                    </div>
                    <span class="ml-auto">(8)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Honey Gold</label>
                    </div>
                    <span class="ml-auto">(2)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Honey Yellow</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                  <div
                    class="flex justify-between items-center space-x-4 text-[#868686] mb-[14px]"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="origin-checkbox-1"
                        class="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label for="origin-checkbox-1">Spices</label>
                    </div>
                    <span class="ml-auto">(7)</span>
                  </div>
                </div>
              </div>
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
        <div class="w-9/12" v-else>
          <div class="flex justify-between gap-3 py-5 mb-7">
            <div class="flex justify-between gap-2 items-center">
              <label class="text-customGray2 font-regular">Menampilkan</label>
              <select
                name=""
                id=""
                class="p-2 text-customGray2 bg-[#f2f2f2] outline-none"
              >
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
              </select>
              <label class="text-customGray2 font-regular">
                dari {{ storeProduct.products.total }}</label
              >
            </div>
            <div class="flex items-center">
              <label class="text-customGray2 font-regular mr-4">Urutkan</label>
              <select class="p-2 text-customGray2 bg-[#f2f2f2] outline-none">
                <option value="product">Nama Produk</option>
                <option value="price">Price</option>
                <option value="date">Date</option>
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
import AuthenticatedLayout from "../../layouts/authenticatedlayout.vue";
import { ref, onMounted, reactive, watchEffect, computed } from "vue";
import { useStoreProduct } from "../../stores/storeProduct";
import { useStoreAuth } from "../../stores/storeAuth";
import { useRouter } from "vue-router";
import Card from "../../components/Card.vue";
import Pagination from "../../components/pagination.vue";
import Breadcrumbs from "../../components/breadcrumbs.vue";

const storeAuth = useStoreAuth();
const storeProduct = useStoreProduct();

const price_from = ref("");
const price_to = ref("");
const orderBy = ref("product_name");
const sort = ref("ASC");
const accordionItem1 = ref(true);
const accordionItem2 = ref(true);
const accordionItem3 = ref(true);
const accordionItem4 = ref(true);
const accordionItem5 = ref(true);

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

const toggleAccordionItem1 = () => {
  accordionItem1.value = !accordionItem1.value;
};

const toggleAccordionItem2 = () => {
  accordionItem2.value = !accordionItem2.value;
};

const toggleAccordionItem3 = () => {
  accordionItem3.value = !accordionItem3.value;
};

const toggleAccordionItem4 = () => {
  accordionItem4.value = !accordionItem4.value;
};

const toggleAccordionItem5 = () => {
  accordionItem5.value = !accordionItem5.value;
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
