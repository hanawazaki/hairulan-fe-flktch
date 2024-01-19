<template>
  <nav class="flex justify-end border border-gray-600">
    <button class="px-4 py-2 border border-gray-600" @click="handleLogout">
      Logout
    </button>
  </nav>
</template>

<script setup>
import { useStoreAuth } from "../stores/storeAuth";

const storeAuth = useStoreAuth();

const handleLogout = () => {
  storeAuth.logout();
};
</script>

<style lang="scss" scoped></style>
