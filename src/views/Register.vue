<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");

const handleRegister = () => {
  router.push("/dashboard");
};

// const handleLogin = () => {
// console.log("Menuju halaman login...");
// router.push("/Login");
// };
</script>

<template>
  <div class="flex">
    <!-- Bagian Kiri (Ilustrasi) -->
    <div class="hidden lg:flex w-1/2">
      <img src="../assets/masuk-asset.svg" alt="Illustration" class="absolute w-[150%] h-[105%] -left-70 top-1/2 -translate-y-1/2" />
    </div>

    <!-- Bagian Kanan (Form Login) -->
    <div class="flex flex-col justify-center items-center">
      <img src="../assets/logo.svg" alt="IoT Bridge" class="w-60 translate-x-75" />

      <div class="w-full max-w-md">
        <form @submit.prevent="handleRegister" class="bg-white translate-x-75 rounded-xl w-[400px] flex flex-col space-y-2 px-4 py-5">
          <div>
            <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Nama Pengguna</label>
            <input
              type="text"
              v-model="username"
              class="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
              placeholder="Masukkan nama pengguna"
            />
          </div>

          <div>
            <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Alamat Email</label>
            <input
              type="email"
              v-model="email"
              class="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
              placeholder="Masukkan email pengguna"
            />
          </div>

          <div>
            <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Nomor Handphone</label>
            <input
              type="text"
              v-model="phone"
              class="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
              placeholder="Masukkan nomor handphone"
            />
          </div>

          <div class="relative">
            <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Kata sandi</label>
            <input type="password" v-model="password" class="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] outline-none transition-all pr-10 font-poppins" placeholder="••••••••" />
            <!-- Ikon toggle bisa ditambahkan di sini nanti -->
            <!-- Ikon mata (eye) untuk toggle password visibility -->
            <span class="absolute inset-y-0 right-3 top-5 flex items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500 hover:text-gray-700">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </span>
          </div>

          <button type="submit" class="w-full mt-2 !bg-[#28527A] text-white font-bold py-2.5 rounded-lg shadow-lg shadow-[#28527A]/50 hover:shadow-[#28527A]/70 transition-shadow font-poppins">Daftar</button>

          <div class="mt-4 text-center text-sm text-gray-600 font-poppins">
            Sudah punya akun?
            <a href="/Login" class="cursor-pointer !text-[#28527A] hover:!text-[#FF6500] font-bold font-poppins"> Masuk </a>
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
