<template>
  <div class="max-w-md mx-auto bg-white rounded p-6 shadow-md">
    <h2 class="text-2xl font-semibold mb-6">Form Register</h2>
    <form @submit.prevent="submitRegister">
      <!-- Nama Depan -->
      <div class="mb-4">
        <label
          for="firstName"
          class="block text-gray-600 text-sm font-medium mb-2"
          >Nama Depan</label
        >
        <input
          type="text"
          id="firstName"
          name="firstName"
          class="form-input w-full border rounded-md"
          v-model="formData.first_name"
        />
      </div>

      <!-- Nama Belakang -->
      <div class="mb-4">
        <label
          for="lastName"
          class="block text-gray-600 text-sm font-medium mb-2"
          >Nama Belakang</label
        >
        <input
          type="text"
          id="lastName"
          name="lastName"
          class="form-input w-full border rounded-md"
          v-model="formData.last_name"
        />
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="block text-gray-600 text-sm font-medium mb-2"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          class="form-input w-full border rounded-md"
          v-model="formData.email"
        />
      </div>

      <!-- Phone -->
      <div class="mb-4">
        <label for="phone" class="block text-gray-600 text-sm font-medium mb-2"
          >Phone</label
        >
        <input
          type="tel"
          id="phone"
          name="phone"
          class="form-input w-full border rounded-md"
          v-model="formData.phone"
        />
      </div>

      <!-- Password -->
      <div class="mb-4">
        <label
          for="password"
          class="block text-gray-600 text-sm font-medium mb-2"
          >Password</label
        >
        <input
          type="password"
          id="password"
          name="password"
          class="form-input w-full border rounded-md"
          v-model="formData.password"
        />
      </div>

      <!-- Confirm Password -->
      <div class="mb-6">
        <label
          for="confirmPassword"
          class="block text-gray-600 text-sm font-medium mb-2"
          >Konfirmasi Password</label
        >
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          class="form-input w-full border rounded-md"
        />
      </div>
      <!-- Tombol Register -->
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useStoreAuth } from "../../stores/storeAuth";

const formData = reactive({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
});
const storeAuth = useStoreAuth();

const submitRegister = () => {
  storeAuth.register(formData);
};
</script>

<style lang="scss" scoped></style>
