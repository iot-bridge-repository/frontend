<script setup>
console.info("Login");
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isLoading = ref(false);

const login = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const response = await axios.post("https://your-api.com/login", {
      email: email.value,
      password: password.value,
    });

    // Contoh menyimpan token
    localStorage.setItem("token", response.data.token);

    alert("Login berhasil!");

    // Redirect atau aksi lain bisa ditambahkan di sini
  } catch (error) {
    if (error.response?.data?.message) {
      errorMessage.value = error.response.data.message;
    } else {
      errorMessage.value = "Gagal login. Silakan coba lagi.";
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="flex">
    <!-- Bagian Kiri (Ilustrasi) -->
    <div class="hidden lg:flex w-1/2">
      <img src="../assets/masuk-asset.svg" alt="Illustration" class="absolute w-[150%] h-[110%] -left-70 top-1/2 -translate-y-1/2" />
    </div>

    <!-- Bagian Kanan (Form Login) -->
    <div class="flex flex-col justify-center items-center p-10">
      <img src="../assets/logo.svg" alt="IoT Bridge" class="w-60 mb-8 translate-x-80" />

      <div class="w-full max-w-md">
        <!-- Form -->
        <form @submit.prevent="login">
          <div class="bg-white translate-x-80">
            <div class="rounded-xl mb-4">
              <div class="w-[400px] flex-col space-y-3">
                <div>
                  <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Alamat email</label>
                  <input
                    type="email"
                    v-model="email"
                    class="w-[400px] px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
                    placeholder="Masukkan email pengguna"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm text-left font-bold text-[#28527A] font-poppins mb-1">Kata sandi</label>
                  <input type="password" v-model="password" class="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all" placeholder="••••••••" required />
                </div>

                <div class="flex items-center justify-between">
                  <label class="flex items-center">
                    <input type="checkbox" class="rounded border-gray-300 text-indigo-600 focus:!ring-[#28527A]" />
                    <span class="ml-2 text-sm text-gray-600 font-poppins">Ingat saya</span>
                  </label>
                  <a href="/ForgotPassword" class="text-sm font-poppins !text-[#28527A] hover:!text-[#FF6500]">Lupa kata sandi?</a>
                </div>

                <button type="submit" :disabled="isLoading" class="w-full mt-5 !bg-[#28527A] text-white font-bold py-2.5 rounded-lg shadow-lg shadow-[#28527A]/50 hover:shadow-[#28527A]/70 transition-shadow font=poppins">
                  {{ isLoading ? "Memproses..." : "Masuk" }}
                </button>
              </div>

              <!-- Pesan Error -->
              <div v-if="errorMessage" class="mt-4 text-red-500 text-sm text-center">
                {{ errorMessage }}
              </div>

              <div class="mt-10 text-center text-sm text-gray-600 font-poppins">
                Belum punya akun?
                <a href="/Register" class="cursor-pointer !text-[#28527A] hover:!text-[#FF6500] font-bold font-poppins">Daftar</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
