<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <div class="flex flex-1">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Halaman isi -->
      <main class="">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
