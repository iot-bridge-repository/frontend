<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

import { ref } from "vue";

const deskripsi = ref("");

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
    <!-- Navbar di atas -->
    <Navbar />

    <!-- Konten utama: Sidebar + Halaman Konten -->
    <div class="flex flex-1">
      <!-- Sidebar di kiri -->
      <Sidebar />

      <!-- Konten utama -->
      <main class="ml-55 p-10 bg-white font-poppins text-[#28527A] max-w-5xl mx-auto">
        <h2 class="text-2xl text-left font-bold mb-6">Profile Organisasi</h2>

        <form class="grid md:grid-cols-3 gap-10">
          <!-- Kolom kiri (form) -->
          <div class="md:col-span-2 space-y-4">
            <!-- Nama Organisasi -->
            <div>
              <label class="block font-semibold mb-1 text-left">Nama Organisasi<span class="text-red-500">*</span></label>
              <input type="text" value="Pokdakan Bintang Rosela Jaya" readonly class="w-full border border-[#28527A] rounded-md px-3 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#28527A]" />
              <p style="font-size: 9px" class="mt-1 text-gray-800">
                <span class="text-red-500">*</span>
                Nama Organisasi yang sudah terdaftar tidak bisa diubah. Jika terdapat kesalahan dalam nama organisasi, silakan hubungi admin sistem.
              </p>
            </div>

            <!-- Deskripsi -->
            <div>
              <label class="block font-semibold mb-1 text-left">Deskripsi (Opsional)</label>
              <textarea
                v-model="deskripsi"
                maxlength="500"
                rows="4"
                class="w-full border border-[#28527A] rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#28527A]"
                placeholder="Tuliskan deskripsi organisasi jika ada..."
              ></textarea>
              <div class="text-right text-xs text-gray-500">{{ deskripsi.length }} / 500</div>
            </div>

            <!-- Email -->
            <div>
              <label class="block font-semibold mb-1 text-left">Alamat Email</label>
              <input type="email" class="w-full border border-[#28527A] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#28527A]" placeholder="Masukan alamat email" />
            </div>

            <!-- Telepon -->
            <div>
              <label class="block font-semibold mb-1 text-left"> Nomor Telepon </label>
              <input type="tel" v-model="phone" @input="filterNumber" class="w-full border border-[#28527A] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#28527A]" placeholder="Masukkan nomor telepon" />
              <p v-if="showWarning" class="text-red-500 text-xs mt-1 text-left">Hanya boleh memasukkan angka!</p>
            </div>

            <!-- Lokasi -->
            <div>
              <label class="block font-semibold mb-1 text-left">Lokasi<span class="text-red-500">*</span></label>
              <input type="text" class="w-full border border-[#28527A] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#28527A]" placeholder="Masukan lokasi organisasi" />
            </div>

            <!-- Timezone -->
            <div>
              <label class="block font-semibold mb-1 text-left">Zona Waktu<span class="text-red-500">*</span></label>
              <div class="relative">
                <select class="appearance-none w-full border border-[#28527A] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#28527A]">
                  <option>WIB</option>
                  <option>WITA</option>
                  <option>WIT</option>
                </select>
                <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#28527A]">
                  <svg class="w-6 h-6" fill="#28527A" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Kolom kanan (Logo Upload) -->
          <div>
            <label class="block font-semibold mb-2 text-left">Logo (Opsional)</label>
            <div class="border-2 border-dashed border-[#28527A] rounded-md flex flex-col items-center justify-center px-4 py-6 text-center w-80 h-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                <path
                  d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"
                />
              </svg>
              <p class="mt-1 font-bold text-[#28527A]">Unggah Logo</p>
              <p class="text-sm text-gray-500 mt-5">Unggah dari komputer atau tarik dan lepaskan file logonya dengan format .png, .jpg, .jpeg.</p>
              <p class="text-sm text-gray-500 mt-1">Ukuran gambar minimal 2MB</p>
            </div>
            <!-- Tombol Perbarui -->
            <div class="ml-50 mt-10">
              <button class="!bg-[#28527A] hover:bg-[#1e3e5d] text-white font-bold py-2 px-6 rounded-md transition duration-200">Perbarui</button>
            </div>
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
