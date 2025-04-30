<script setup>
console.info("Login");
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = () => {
  alert(`Email: ${email.value}\nPassword: ${password.value}`);
};
</script>

<template>
  <div class="flex">
    <!-- Bagian Kiri (Ilustrasi) -->
    <div class="hidden lg:flex w-1/2">
      <img src="../assets/masuk-asset.svg" alt="Illustration" class="absolute w-[150%] h-[110%] -left-70 top-1/2 -translate-y-1/2" />
    </div>

    <!-- Bagian Kanan (Form Login) -->
    <div class="flex flex-col justify-center items-center w-full p-10">
      <img src="../assets/logo.svg" alt="IoT Bridge" class="w-100 mb-5 translate-x-60" />

      <div class="w-full max-w-md">
        <!-- Form -->
        <form @submit.prevent="login">
          <div class="bg-white translate-x-60">
            <div class="rounded-xl mb-4">
              <form class="space-y-3">
                <div>
                  <label class="block text-sm text-left font-medium text-gray-700 mb-1">Alamat Email</label>
                  <input type="email" class="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all" placeholder="Masukkan Email Pengguna" />
                </div>

                <div>
                  <label class="block text-sm text-left font-medium text-gray-700 mb-1">Kata sandi</label>
                  <input type="password" class="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all" placeholder="••••••••" />
                </div>

                <div class="flex items-center justify-between">
                  <label class="flex items-center">
                    <input type="checkbox" class="rounded border-gray-300 text-indigo-600 focus:!ring-[#28527A]" />
                    <span class="ml-2 text-sm text-gray-600">Ingat saya</span>
                  </label>
                  <a href="#" class="text-sm !text-[#28527A] hover:!text-[#FF6500]">Lupa kata sandi?</a>
                </div>

                <button type="submit" class="w-full mt-5 !bg-[#28527A] text-white font-bold py-2.5 rounded-lg shadow-lg shadow-[#28527A]/50 hover:shadow-[#28527A]/70 transition-shadow">Masuk</button>
              </form>

              <div class="mt-10 text-center text-sm text-gray-600">
                Belum punya akun?
                <a href="#" class="!text-[#28527A] hover:!text-[#FF6500] font-bold">Daftar</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
