<template>
  <AuthLayout>
    <div class="w-5/12 mx-auto bg-white rounded p-6 shadow-md">
      <h2 class="text-2xl font-semibold mb-6">Form Login</h2>
      <form @submit.prevent="submitLogin">
        <!-- Email -->
        <div class="mb-4">
          <label
            for="email"
            class="block text-gray-600 text-sm font-medium mb-2"
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

        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </AuthLayout>
</template>

<script setup>
import { reactive } from "vue";
import { useStoreAuth } from "../../stores/storeAuth";
import AuthLayout from "../../layouts/AuthLayout.vue";

const formData = reactive({
  email: "",
  password: "",
});
const storeAuth = useStoreAuth();

const submitLogin = () => {
  // console.log("login", formData);
  storeAuth.login(formData);
};
</script>

<style lang="scss" scoped></style>
