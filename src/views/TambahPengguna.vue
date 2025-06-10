<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

const kembaliLamanPengguna = () => {
  window.location.href = "/pengguna"; // Ganti dengan URL absolut atau path relatif yang benar
};

import { ref } from "vue";

const phone = ref("");
const showWarning = ref(false);

function filterNumber(event) {
  const original = phone.value;
  const filtered = original.replace(/[^0-9]/g, "");

  if (original !== filtered) {
    showWarning.value = true;
  } else {
    showWarning.value = false;
  }

  phone.value = filtered;
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <div class="flex flex-1">
      <Sidebar />

      <main class="mr-80 p-10 bg-white font-poppins text-[#28527A] mx-auto">
        <div class="flex justify-between items-center font-bold mb-7 mt-7">
          <h2 class="flex items-center text-2xl text-left" @click="kembaliLamanPengguna">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-square-fill mr-3" viewBox="0 0 16 16">
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
            </svg>
            Tambah Pengguna Baru
          </h2>
        </div>

        <form>
          <div>
            <label class="block font-semibold mb-1 text-left">Nama Pengguna<span class="text-red-500">*</span></label>
            <input type="text" class="w-full border border-[#28527A] rounded-md px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#28527A]" placeholder="Masukan nama pengguna" />
          </div>

          <div>
            <label class="block font-semibold mb-1 text-left">Alamat Email</label>
            <input type="email" class="w-full border border-[#28527A] rounded-md px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#28527A]" placeholder="Masukan alamat email" />
          </div>

          <div>
            <label class="block font-semibold mb-1 text-left"> Nomor Handphone </label>
            <input type="tel" v-model="phone" @input="filterNumber" class="w-full border border-[#28527A] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#28527A]" placeholder="Masukkan nomor handphone" />
            <p v-if="showWarning" class="text-red-500 text-xs mt-1 mb-4 text-left">Hanya boleh memasukkan angka!</p>
          </div>

          <div>
            <label class="block font-semibold mb-1 mt-4 text-left">Peran<span class="text-red-500">*</span></label>
            <div class="relative">
              <select class="appearance-none w-full border border-[#28527A] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#28527A]">
                <option>Admin Organisasi</option>
                <option>Operator</option>
                <option>Viewer</option>
                <option>Basic Viewer</option>
              </select>
              <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#28527A]">
                <svg class="w-6 h-6" fill="#28527A" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div class="mt-10 flex justify-end space-x-4">
            <button class="!bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-200">Batal</button>

            <button class="!bg-[#28527A] hover:bg-[#1e3e5d] text-white font-bold py-2 px-6 rounded-md transition duration-200">Simpan</button>
          </div>
        </form>
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
