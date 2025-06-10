<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
const ponds = ref([{ name: "KOLAM A - RAS" }, { name: "KOLAM B - RAS" }, { name: "KOLAM C - Non RAS" }, { name: "KOLAM D - Non RAS" }]);
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar di atas -->
    <Navbar />

    <!-- Konten utama: Sidebar + Halaman Konten -->
    <div class="flex flex-1">
      <!-- Sidebar di kiri -->
      <Sidebar />

      <!-- CONTENT -->

      <main class="bg-white flex-1">
        <!-- Pond Cards -->
        <div class="mt-10 pl-60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div v-for="pond in ponds" :key="pond.name" class="w-110 h-64 bg-[#28527A] text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:bg-[#FF6500] transition">
            <h2 class="mb-5 text-xl font-bold text-center font-poppins">
              {{ pond.name }}
            </h2>
            <img src="../assets/ikan-ikon.svg" class="w-30 h-30" alt="Ikon Ikan" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
