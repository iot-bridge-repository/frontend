<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex flex-1">
      <Sidebar />

      <main class="flex-1 p-15 bg-white">
        <div class="flex flex-col items-start space-x-45">
          <!-- Notifikasi -->
          <div class="mb-5">
            <label class="w-[500px] block text-left text-[#28527A] text-xl font-bold font-poppins mb-1">Notifikasi</label>
            <div class="relative">
              <select class="appearance-none w-full text-[#28527A] font-semibold font-poppins border border-[#28527A] rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#28527A]">
                <option>Aktif</option>
                <option>Tidak Aktif</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#28527A]">
                <svg class="w-6 h-6" fill="#28527A" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Bahasa -->
          <div class="mb-5">
            <label class="w-[500px] block text-left text-[#28527A] text-xl font-bold font-poppins mb-1">Bahasa</label>
            <div class="relative">
              <select class="appearance-none w-full text-[#28527A] font-semibold font-poppins border border-[#28527A] rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#28527A]">
                <option>Bahasa Indonesia</option>
                <option>Bahasa Inggris</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#28527A]">
                <svg class="w-6 h-6" fill="#28527A" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
