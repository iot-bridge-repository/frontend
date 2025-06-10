<script setup>
import { reactive, ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

// Simulasi data dari database
const dbUserData = {
  username: "Mufita",
  fullname: "Mufita",
  email: "halimah.mufita@gmail.com",
  phone: "0895353304313",
};

// State form
const form = reactive({
  username: "",
  fullname: "",
  email: "",
  phone: "",
});

// State kontrol input readonly
const isEditable = ref(false);

// Ambil data saat komponen dimount
onMounted(() => {
  Object.assign(form, dbUserData);
});

// Fungsi toggle edit/save
function toggleEdit() {
  isEditable.value = !isEditable.value;
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
      <!-- CONTENT -->
      <main class="flex-1 p-20 bg-white">
        <div class="flex translate-x-25 pb-10">
          <div class="relative w-80 h-80 mt-5">
            <img src="../assets/profile2.svg" class="w-80 h-80 object-cover rounded-full border border-gray-200 shadow-sm" alt="Foto Profile" />

            <div class="absolute bottom-4 right-4 bg-[#28527A] rounded-full p-3 shadow-md cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-camera" viewBox="0 0 16 16">
                <path
                  d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"
                />
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
              </svg>
            </div>
          </div>

          <form @submit.prevent="update">
            <div class="translate-x-10">
              <div class="rounded-xl mb-2">
                <form class="space-y-2">
                  <div class="p-6">
                    <div class="mb-4">
                      <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Nama Pengguna*</label>
                      <input
                        type="text"
                        v-model="form.username"
                        :readonly="!isEditable"
                        class="w-[500px] px-2 py-2 font-medium text-[#28527A] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
                      />
                    </div>
                    <div class="mb-4">
                      <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Nama Lengkap*</label>
                      <input
                        type="text"
                        v-model="form.fullname"
                        :readonly="!isEditable"
                        class="w-[500px] px-2 py-2 font-medium text-[#28527A] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
                      />
                    </div>

                    <div class="mb-4">
                      <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Alamat Email*</label>
                      <input
                        type="email"
                        v-model="form.email"
                        :readonly="!isEditable"
                        class="w-[500px] px-2 py-2 font-medium text-[#28527A] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
                      />
                    </div>

                    <div class="mb-4">
                      <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Nomor Handphone</label>
                      <input
                        type="text"
                        v-model="form.phone"
                        :readonly="!isEditable"
                        class="w-[500px] px-2 py-2 font-medium text-[#28527A] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
                      />
                    </div>

                    <button @click="toggleEdit" class="!bg-[#28527A] !hover:-[#1e3e5c] text-white ml-100 mt-10 rounded-md font-bold font-poppins">
                      {{ isEditable ? "Simpan" : "Perbarui" }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </form>
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
