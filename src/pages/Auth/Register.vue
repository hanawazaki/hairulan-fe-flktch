<template>
  <AuthLayout>
    <div class="register auth-container">
      <form @submit.prevent="submitRegister">
        <div class="first-page" v-if="firstPage">
          <h2 class="text-[26px] font-bold mb-6 text-[#730C07]">
            Daftar Sekarang
          </h2>
          <!-- Nama Depan -->
          <div class="mb-4">
            <input
              type="text"
              placeholder="Nama Depan"
              class="auth-input"
              v-model="formData.first_name"
            />
          </div>

          <!-- Nama Belakang -->
          <div class="mb-4">
            <input
              type="text"
              placeholder="Nama Balakang"
              class="auth-input"
              v-model="formData.last_name"
            />
          </div>

          <!-- Email -->
          <div class="mb-4">
            <input
              type="email"
              placeholder="Email"
              class="auth-input"
              v-model="formData.email"
            />
          </div>

          <button @click="showSecondPage" type="button" class="button-primary">
            Selanjutnya
          </button>
        </div>

        <div class="second-page" v-else>
          <div class="mb-6">
            <button
              @click="showFirstPage"
              class="flex gap-1 items-center text-lg font-medium text-customRed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L7.41421 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H7.41421L12.7071 5.70711Z"
                  fill="#730C07"
                />
              </svg>
              Kembali
            </button>
          </div>
          <!-- Phone -->
          <div class="mb-4">
            <input
              type="tel"
              placeholder="Nomor Telepon"
              class="auth-input"
              v-model="formData.phone"
            />
          </div>

          <!-- Password -->
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

          <!-- Confirm Password -->
          <div class="relative flex items-center mb-4">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Password"
              class="auth-input"
              v-model="formData.confirm_password"
            />
            <button
              @click="handleShowHideCPassword"
              type="button"
              class="absolute text-customRed text-base font-normal top-0 right-0 h-full pr-4"
            >
              {{ showConfirmPassword ? "Hide" : "Show" }}
            </button>
          </div>
          <!-- Tombol Register -->
          <button type="submit" class="button-primary">Register</button>
        </div>
        <hr class="my-[39px] w-[70%] mx-auto" />

        <h6 class="text-customGray text-base font-normal text-center">
          Belum punya akun?
          <RouterLink class="text-customRed hover:underline" to="/login"
            >Masuk</RouterLink
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
  first_name: "",
  last_name: "",
  email: "",
  password: "",
});

const firstPage = ref(true);
const secondPage = ref(false);

const showpassword = ref(false);
const showConfirmPassword = ref(false);

const handleShowHidePassword = () => {
  showpassword.value = !showpassword.value;
};
const handleShowHideCPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const submitRegister = () => {
  storeAuth.register(formData);
};

const showFirstPage = () => {
  secondPage.value = false;
  firstPage.value = true;
};

const showSecondPage = () => {
  secondPage.value = true;
  firstPage.value = false;
};
</script>

<style scoped></style>
