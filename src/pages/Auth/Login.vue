<template>
  <AuthLayout>
    <div class="login auth-container">
      <h2 class="text-[26px] font-bold mb-6 text-[#730C07]">Masuk</h2>
      <form @submit.prevent="submitLogin">
        <div class="mb-[25px]">
          <input
            type="email"
            placeholder="Email"
            class="auth-input"
            v-model="formData.email"
          />
        </div>
        <div class="relative flex items-center mb-4">
          <input
            :type="showpassword ? 'text' : 'password'"
            placeholder="Password"
            class="auth-input"
            v-model="formData.password"
          />
          <button
            @click="handleShowHidePassword"
            type="button"
            class="absolute text-customRed text-base font-normal top-0 right-0 h-full pr-4"
          >
            {{ showpassword ? "Hide" : "Show" }}
          </button>
        </div>

        <div class="flex justify-end mt-5 my-7">
          <a href="#" class="text-xs font-normal text-customRed"
            >Lupa Password?</a
          >
        </div>

        <button type="submit" class="button-primary">Masuk</button>

        <hr class="my-[39px] w-[70%] mx-auto" />

        <h6 class="text-customGray text-base font-normal text-center">
          Belum punya akun?
          <RouterLink class="text-customRed hover:underline" to="/register"
            >Daftar Sekarang</RouterLink
          >
        </h6>
      </form>
    </div>
  </AuthLayout>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStoreAuth } from "../../stores/storeAuth";
import AuthLayout from "../../layouts/AuthLayout.vue";

const storeAuth = useStoreAuth();
const formData = reactive({
  email: "",
  password: "",
});
const showpassword = ref(false);

const handleShowHidePassword = () => {
  showpassword.value = !showpassword.value;
};

const submitLogin = () => {
  // console.log("login", formData);
  storeAuth.login(formData);
};
</script>

<style scoped></style>
