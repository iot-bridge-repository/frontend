<script setup>
import { ref } from "vue";

// Notifikasi
const notifCount = ref(3);

// User data
const user = ref({
  name: "Mufita",
  avatar: "https://randomuser.me/api/portraits/women/45.jpg",
});

// Profile form data
const profile = ref({
  username: "Mufita",
  fullname: "Mufita",
  email: "halimah.mufita@gmail.com",
  phone: "0895353304313",
});

// Function untuk handle form submit
const update = () => {
  console.log("Data profile yang dikirim:");
  console.log(profile.value);
  // Tambahkan di sini logic untuk kirim ke server/API
};
</script>

<template>
  <!-- Sidebar -->
  <nav class="fixed top-0 left-0 w-64 h-screen bg-[#00152D] border-r border-[#00152D]">
    <div class="flex flex-wrap mt-8 ml-4">
      <img src="../assets/logo-website.svg" alt="IoT Bridge" />
    </div>
    <div class="mt-7 mb-4">
      <ul class="ml-4">
        <li class="mb-2 px-4 py-4 mr-4 flex flex-row border-gray-100 hover:bg-gray-100 group rounded-lg">
          <span>
            <svg class="fill-current h-5 w-5 text-[#FF6500] group-hover:text-[#28527A]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" />
            </svg>
          </span>
          <a href="#">
            <span class="ml-2 font-bold text-[#FF6500] group-hover:text-[#28527A] font-poppins">Dashboard</span>
          </a>
        </li>

        <li class="mb-2 px-4 py-4 mr-4 flex flex-row border-gray-100 hover:bg-gray-100 group rounded-lg">
          <span>
            <svg class="fill-current h-5 w-5 text-[#FF6500] group-hover:text-[#28527A]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 7h3V4H5z" />
              <path
                d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1m7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5"
              />
            </svg>
          </span>
          <a href="#">
            <span class="ml-2 font-bold text-[#FF6500] group-hover:text-[#28527A] font-poppins">Perangkat</span>
          </a>
        </li>

        <li class="mb-2 px-4 py-4 mr-4 flex flex-row border-gray-100 hover:bg-gray-100 group rounded-lg">
          <span>
            <svg class="fill-current h-5 w-5 text-[#FF6500] group-hover:text-[#28527A]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
          </span>
          <a href="#">
            <span class="ml-2 font-bold text-[#FF6500] group-hover:text-[#28527A] font-poppins">Pengguna</span>
          </a>
        </li>

        <li class="mb-2 px-4 py-4 mr-4 flex flex-row border-gray-100 hover:bg-gray-100 group rounded-lg">
          <span>
            <svg class="fill-current h-5 w-5 text-[#FF6500] group-hover:text-[#28527A]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5z"
              />
            </svg>
          </span>
          <a href="#">
            <span class="ml-2 font-bold text-[#FF6500] group-hover:text-[#28527A] font-poppins">Organisasi</span>
          </a>
        </li>

        <li class="mb-2 px-4 py-4 mr-4 flex flex-row border-gray-100 hover:bg-gray-100 group rounded-lg">
          <span>
            <svg class="fill-current h-5 w-5 text-[#FF6500] group-hover:text-[#28527A]" viewBox="0 0 16 16">
              <path
                d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"
              />
              <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0" />
            </svg>
          </span>
          <a href="#">
            <span class="ml-2 font-bold text-[#FF6500] group-hover:text-[#28527A] font-poppins">Statistika</span>
          </a>
        </li>

        <li class="mb-2 px-4 py-4 mr-4 flex flex-row border-gray-100 hover:bg-gray-100 group rounded-lg">
          <span>
            <svg class="fill-current h-5 w-5 text-[#FF6500] group-hover:text-[#28527A]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
              />
            </svg>
          </span>
          <a href="#">
            <span class="ml-2 font-bold text-[#FF6500] group-hover:text-[#28527A] font-poppins">Pengaturan</span>
          </a>
        </li>
      </ul>
    </div>

    <footer class="mb-0 mt-25 text-center text-xs text-gray-300">© 2025 Teknik Informatika Universitas Lampung</footer>
  </nav>
  <!-- Sidebar -->

  <!-- CONTENT -->
  <main class="bg-white">
    <!-- Navbar -->
    <div class="fixed top-0 right-0 flex items-center w-[1105px] bg-white px-4 py-2 rounded-t-xl shadow-md z-50">
      <div class="flex items-center space-x-2">
        <button class="text-[#28527A]">&#9776;</button>
        <h1 class="text-[#28527A] font-poppins font-bold !text-xl">Profile</h1>
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
        <img src="../assets/profile2.svg" class="w-10 h-10 object-cover rounded-full border border-gray-200 shadow-sm" alt="Foto Profile" />
        <span class="text-base text-[#28527A] font-poppins">Mufita</span>
      </div>
    </div>
  </main>
  <!-- CONTENT -->
  <!--Profile Section-->
  <!-- Form -->
  <form @submit.prevent="update">
    <div class="bg-white translate-x-80">
      <div class="rounded-xl mb-2">
        <form class="space-y-2">
          <div>
            <label class="block text-sm text-left font-bold text-[#28527A] mb-1 font-poppins">Nama Pengguna</label>
            <input
              type="text"
              class="w-[500px] px-2 py-2 font-medium text-[#28527A] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins"
              placeholder="Mufita"
            />
          </div>

          <div>
            <label class="block text-sm text-left font-medium text-gray-700 mb-1 font-poppins">Alamat Email</label>
            <input type="text" class="w-[500px] px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins" placeholder="Masukkan email pengguna" />
          </div>

          <div>
            <label class="block text-sm text-left font-medium text-gray-700 mb-1 font-poppins">Nomor Handphone</label>
            <input type="email" class="w-[500px] px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins" placeholder="Masukkan nomor handphone" />
          </div>

          <div>
            <label class="block text-sm text-left font-medium text-gray-700 mb-1 font-poppins">Nama Organisasi</label>
            <input type="email" class="w-[500px] px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28527A] focus:border-[#28527A] outline-none transition-all font-poppins" placeholder="Masukkan nama organisasi" />
          </div>
          <button type="submit" class="w-full mt-3 !bg-[#28527A] text-white font-bold py-2.5 rounded-lg shadow-lg shadow-[#28527A]/50 hover:shadow-[#28527A]/70 transition-shadow font-poppins">Daftar</button>
        </form>
      </div>
    </div>
  </form>

  <!--Profile Section-->
</template>

<style scoped></style>
