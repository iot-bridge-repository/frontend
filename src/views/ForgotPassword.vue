<script setup>
console.info("Forgot Password");
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
    <div class="flex flex-col justify-center items-center p-10">
      <img src="../assets/logo.svg" alt="IoT Bridge" class="w-70 mb-10 translate-x-80" />

      <div class="max-w-md">
        <!-- Form -->
        <form @submit.prevent="login">
          <div class="bg-white translate-x-80">
            <div class="rounded-xl mb-4">
              <form class="w-[400px] flex-col space-y-3">
                <div>
                  <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Email/No.Handphone pengguna</label>
                  <input
                    type="email"
                    class="w-[400px] px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
                    placeholder="Masukkan email/no.Handphone pengguna"
                  />
                </div>

                <button type="submit" class="w-full mt-5 !bg-[#28527A] text-white font-bold py-2.5 rounded-lg shadow-lg shadow-[#28527A]/50 hover:shadow-[#28527A]/70 transition-shadow font-poppins">Kirim</button>
              </form>
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
