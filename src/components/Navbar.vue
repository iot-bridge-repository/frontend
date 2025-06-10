<script setup>
// Pastikan notifCount didefinisikan
const notifCount = 5; // misalnya, atau kamu ambil dari props / state nanti
</script>

<!-- Navbar.vue -->
<template>
  <!-- Navbar -->
  <div class="fixed top-0 right-0 flex items-center w-[1093px] bg-white px-4 py-2 rounded-t-xl shadow-md z-50">
    <div class="flex items-center space-x-2">
      <button class="text-[#28527A]">&#9776;</button>
      <h1 class="text-[#28527A] font-poppins font-bold !text-xl">Dashboard</h1>
    </div>
    <div class="flex items-center space-x-2 ml-auto">
      <div class="relative right-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#28527A" class="bi bi-bell" viewBox="0 0 16 16">
          <path
            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"
          />
        </svg>
        <!-- Notif badge -->
        <span v-if="notifCount > 0" class="absolute -bottom-1 -right-1 bg-[#FF6500] text-white text-xs font-poppins font-semibold px-1 py-0.1 rounded-full">
          {{ notifCount }}
        </span>
      </div>
      <a href="/Profile" class="flex items-center gap-2">
        <img src="../assets/profile2.svg" class="w-10 h-10 object-cover rounded-full border border-gray-200 shadow-sm" alt="Foto Profile" />
        <span class="text-base text-[#28527A] font-poppins">Mufita</span>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
