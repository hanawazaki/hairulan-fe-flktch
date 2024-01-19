<template>
  <nav class="flex justify-end bg-white p-[28px]">
    <div class="flex justify-between gap-[25px]">
      <div class="search flex">
        <input
          type="text"
          class="flex-1 pl-6 box-border shadow-customShdwSearch outline-none rounded-l-[9px] h-[57px] w-[436px]"
          placeholder="Cari Produk"
        />
        <button
          class="search-button bg-customOrange outline-none text-white p-4 rounded-r-[9px]"
        >
          <SearchSvg />
        </button>
      </div>
      <button>
        <LoveSvg />
      </button>
      <button>
        <ShopSvg />
      </button>
      <button @click="toggleDropdown" class="relative">
        <UserSvg />

        <button
          type="button"
          class="absolute top-[52px] right-0 bg-white rounded-lg p-4 shadow-lg hover:bg-gray-200"
          @click="handleLogout"
          v-if="isDropdownOpen"
          @click.stop=""
        >
          Logout
        </button>
      </button>
    </div>
  </nav>
  <div class="h-64px bg-[#f5f5f5] px-[70px]">
    <button
      class="bg-customOrange flex justify-center text-white py-6 text-xl font-normal w-[212px]"
    >
      Belanja
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12.277 14.7522L8.45062 10.5007C8.27687 10.3076 8.41388 10 8.67361 10H16.3264C16.5861 10 16.7231 10.3076 16.5494 10.5007L12.723 14.7522C12.6038 14.8846 12.3962 14.8846 12.277 14.7522Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { useStoreAuth } from "../stores/storeAuth";
import ArrowDown from "./svg/ArrowDown.vue";
import LoveSvg from "./svg/lovesvg.vue";
import SearchSvg from "./svg/searchsvg.vue";
import ShopSvg from "./svg/shopsvg.vue";
import UserSvg from "./svg/usersvg.vue";
import { ref } from "vue";

const storeAuth = useStoreAuth();

const handleLogout = () => {
  storeAuth.logout();
};

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped></style>
