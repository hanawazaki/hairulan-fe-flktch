<template>
  <AuthenticatedLayout>
    <div class="mx-auto bg-white px-[70px]">
      <Breadcrumbs />
      <div
        v-if="storeProduct.loading === true"
        class="flex justify-center items-center h-screen"
      >
        <h2>LOADING....</h2>
      </div>

      <section class="product-detail flex p-8 gap-5 mb-[73px]" v-else>
        <!-- left -->
        <div class="w-6/12">
          <Galleries
            :thumbs="storeProduct.product_detail?.images[0]"
            :gallery="storeProduct.product_detail?.images"
          />
        </div>
        <!-- right -->

        <div class="w-6/12">
          <h2 class="text[#696969] text-2xl font-bold mb-5">
            {{ storeProduct.product_detail?.name }}
          </h2>
          <p class="text[#696969] text-[22px] font-medium mb-2">
            {{ storeProduct.product_detail?.product_type.name }}
          </p>
          <div class="stars flex gap-[2px] items-center mb-5">
            <Starsvg :width="18" :height="18" v-for="star in 5" :key="star" />
            <label class="text-[10px] text-[#868686] font-normal">(7)</label>
          </div>
          <div class="flex justify-between gap-2">
            <h4 class="text-customOrange text-[22px] font-medium mb-5">
              {{ storeProduct.formatPrice(storeProduct.product_detail?.price) }}
            </h4>
            <a
              href="#"
              class="text-[#6F8EFF] text-xs font-normal flex items-center"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L6.35355 7.35355C6.15829 7.54882 5.84171 7.54882 5.64645 7.35355L4.14645 5.85355C3.95118 5.65829 3.95118 5.34171 4.14645 5.14645C4.34171 4.95118 4.65829 4.95118 4.85355 5.14645L6 6.29289L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645Z"
                  fill="#6F8EFF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 2C2.36739 2 2.24021 2.05268 2.14645 2.14645C2.05268 2.24021 2 2.36739 2 2.5V9.5C2 9.63261 2.05268 9.75978 2.14645 9.85355C2.24021 9.94732 2.36739 10 2.5 10H9.5C9.63261 10 9.75978 9.94732 9.85355 9.85355C9.94732 9.75978 10 9.63261 10 9.5V6C10 5.72386 10.2239 5.5 10.5 5.5C10.7761 5.5 11 5.72386 11 6V9.5C11 9.89783 10.842 10.2794 10.5607 10.5607C10.2794 10.842 9.89783 11 9.5 11H2.5C2.10217 11 1.72064 10.842 1.43934 10.5607C1.15804 10.2794 1 9.89783 1 9.5V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H8C8.27614 1 8.5 1.22386 8.5 1.5C8.5 1.77614 8.27614 2 8 2H2.5Z"
                  fill="#6F8EFF"
                /></svg
              >tersedia</a
            >
          </div>
          <div class="flex gap-3 my-7">
            <div class="qty flex gap-1">
              <button
                class="p-2 w-[58px] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                -
              </button>
              <input
                class="p-2 w-[78px] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                type="number"
              />
              <button
                class="p-2 w-[58px] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                +
              </button>
            </div>
            <button class="bg-customOrange text-white p-2 w-[251px]">
              Tambah ke keranjang
            </button>
            <button class="px-3 py-2 bg-[#f5f5f5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.3987 2.91093C18.319 2.52961 19.3054 2.33334 20.3015 2.33334C21.2977 2.33334 22.2841 2.52961 23.2044 2.91093C24.1245 3.29218 24.9605 3.85095 25.6646 4.55532C26.369 5.25946 26.9282 6.09585 27.3094 7.01596C27.6907 7.93625 27.887 8.92264 27.887 9.9188C27.887 10.915 27.6907 11.9014 27.3094 12.8216C26.9281 13.7418 26.3693 14.5779 25.6648 15.2821C25.6648 15.2822 25.6649 15.282 25.6648 15.2821L15.3515 25.5954C14.8959 26.051 14.1572 26.051 13.7016 25.5954L3.38824 15.2821C1.9658 13.8597 1.16669 11.9304 1.16669 9.9188C1.16669 7.90718 1.9658 5.97794 3.38824 4.55551C4.81067 3.13308 6.7399 2.33396 8.75153 2.33396C10.7632 2.33396 12.6924 3.13308 14.1148 4.55551L14.5265 4.96722L14.938 4.55571C14.938 4.55577 14.9381 4.55564 14.938 4.55571C15.6422 3.85124 16.4785 3.29221 17.3987 2.91093ZM20.3015 4.66667C19.6119 4.66667 18.929 4.80255 18.2919 5.06654C17.6548 5.33053 17.0759 5.71746 16.5883 6.20523L15.3515 7.44209C14.8959 7.89771 14.1572 7.89771 13.7016 7.44209L12.4649 6.20543C11.4801 5.22058 10.1443 4.6673 8.75153 4.6673C7.35874 4.6673 6.023 5.22058 5.03815 6.20543C4.0533 7.19028 3.50002 8.52602 3.50002 9.9188C3.50002 11.3116 4.0533 12.6473 5.03815 13.6322L14.5265 23.1206L24.0149 13.6322C24.5027 13.1446 24.8898 12.5656 25.1538 11.9285C25.4178 11.2913 25.5537 10.6084 25.5537 9.9188C25.5537 9.22916 25.4178 8.54627 25.1538 7.90915C24.8898 7.27202 24.5029 6.69316 24.0151 6.20562C23.5276 5.71785 22.9483 5.33053 22.3112 5.06654C21.6741 4.80255 20.9912 4.66667 20.3015 4.66667Z"
                  fill="#EB3F36"
                />
              </svg>
            </button>
          </div>
          <p class="text-customGray2 font-normal text-lg">
            {{ storeProduct.product_detail?.short_description }}
          </p>
        </div>
      </section>
      <section class="description w-full mb-5">
        <div class="flex justify-center gap-5">
          <div
            v-for="tab in tabs"
            :key="tab.id"
            @click="changeTab(tab.id)"
            :class="{
              'w-[300px] border-b-4 text-customOrange border-customOrange':
                activeTab === tab.id,
              'text-gray-300': activeTab !== tab.id,
            }"
            class="cursor-pointer px-4 py-2"
          >
            <h3 class="font-bold text-[22px] text-center">
              {{ tab.label }}
            </h3>
          </div>
        </div>
        <div class="mt-6">
          <div v-show="activeTab === 'description'" class="p-8">
            <p class="text-lg font-normal text-customGray2">
              {{ storeProduct.product_detail?.description }}
            </p>
          </div>
          <div v-show="activeTab === 'information'" class="content">
            <p>Informasi</p>
          </div>
        </div>
      </section>
      <div class="recomendation w-full mb-[156px]">
        <h2
          class="font-bold text-[22px] text-center text-customGray2 mb-[53px]"
        >
          REKOMENDASI UNTUK ANDA
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="max-w-md bg-white px-3 py-4 rounded-md shadow-md text-center"
          >
            <div class="relative group mb-[21px]">
              <img
                src="../../assets/img/rec2.png"
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
                to="#"
                class="text-xl font-bold text-customGray2 cursor-pointer"
              >
                ABID CLEVER DRIPPER 102
              </RouterLink>
              <h6 class="text-base font-medium text-customGray2">UBRUKOPI</h6>
              <div class="stars flex justify-center gap-[2px] items-center">
                <Starsvg
                  :width="10"
                  :height="10"
                  v-for="star in 5"
                  :key="star"
                />
                <label class="text-[10px] text-[#868686] font-normal"
                  >(7)</label
                >
              </div>
              <h6 class="text-customOrange font-medium text-lg">Rp 480.000</h6>
            </div>
          </div>
          <div
            class="max-w-md bg-white px-3 py-4 rounded-md shadow-md text-center"
          >
            <div class="relative group mb-[21px]">
              <img
                src="../../assets/img/rec3.png"
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
                to="#"
                class="text-xl font-bold text-customGray2 cursor-pointer"
              >
                HARIO GLASS RANGE SER...
              </RouterLink>
              <h6 class="text-base font-medium text-customGray2">UBRUKOPI</h6>
              <div class="stars flex justify-center gap-[2px] items-center">
                <Starsvg
                  :width="10"
                  :height="10"
                  v-for="star in 5"
                  :key="star"
                />
                <label class="text-[10px] text-[#868686] font-normal"
                  >(7)</label
                >
              </div>
              <h6 class="text-customOrange font-medium text-lg">Rp 499.000</h6>
            </div>
          </div>
          <div
            class="max-w-md bg-white px-3 py-4 rounded-md shadow-md text-center"
          >
            <div class="relative group mb-[21px]">
              <img
                src="../../assets/img/rec1.png"
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
                to="#"
                class="text-xl font-bold text-customGray2 cursor-pointer"
              >
                KALITA FP PAPER FILTER ...
              </RouterLink>
              <h6 class="text-base font-medium text-customGray2">UBRUKOPI</h6>
              <div class="stars flex justify-center gap-[2px] items-center">
                <Starsvg
                  :width="10"
                  :height="10"
                  v-for="star in 5"
                  :key="star"
                />
                <label class="text-[10px] text-[#868686] font-normal"
                  >(7)</label
                >
              </div>
              <h6 class="text-customOrange font-medium text-lg">Rp 80.000</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { onMounted, reactive, watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
import AuthenticatedLayout from "../../layouts/authenticatedlayout.vue";
import { useStoreProduct } from "../../stores/storeProduct";
import { useStoreAuth } from "../../stores/storeAuth";
import Breadcrumbs from "../../components/breadcrumbs.vue";
import Galleries from "../../components/Galleries.vue";
import Starsvg from "../../components/svg/Starsvg.vue";
import Shopsvg from "../../components/svg/shopsvg.vue";
import Lovesvg from "../../components/svg/lovesvg.vue";

const route = useRoute();
const storeProduct = useStoreProduct();
const storeAuth = useStoreAuth();

const orderBy = ref("product_name");
const sort = ref("ASC");
const params = reactive({
  keyword: "",
  price: "",
  page: 1,
  limit: 10,
  order: `${orderBy.value},${sort.value}`,
});

watchEffect(() => {
  if (storeAuth.user.name) {
    storeAuth.isTokenAvailable = true;
  } else {
    storeAuth.isTokenAvailable = false;
  }
});

const tabs = [
  { id: "description", label: "Deskripsi" },
  { id: "information", label: "Informasi" },
];

const activeTab = ref(tabs[0].id);

function changeTab(tabId) {
  activeTab.value = tabId;
}

storeAuth.checkTokenAvailability();
storeProduct.getProductDetail(route.params.id);
</script>

<style scoped></style>
