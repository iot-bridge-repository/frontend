<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

const goToAddUserPageDirect = () => {
  window.location.href = "/tambahpengguna"; // Ganti dengan URL absolut atau path relatif yang benar
};
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
      <main class="ml-50 p-10 bg-white font-poppins text-[#28527A] max-w-8xl mx-auto">
        <div class="flex justify-between items-center font-bold mb-7 mt-7">
          <h2 class="text-2xl text-left">Daftar Pengguna</h2>
          <button type="button" class="flex items-center text-sm !bg-[#28527A] hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" @click="goToAddUserPageDirect">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-add mr-3" viewBox="0 0 16 16">
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
            </svg>
            Tambah Pengguna Baru
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-[1000px] max-w-full text-sm bg-white shadow-md rounded-lg mb-4 mx-auto">
            <thead>
              <tr class="border-b bg-[#28527A] text-white font-bold">
                <th class="text-center p-3 px-4 w-[40px]">No</th>
                <th class="text-center p-3 px-4 w-[210px]">Nama Pengguna</th>
                <th class="text-center p-3 px-4 w-[200px]">Alamat Email</th>
                <th class="text-center p-3 px-4 w-[200px]">Nomor Handphone</th>
                <th class="text-center p-3 px-4 w-[150px]">Peran</th>
                <th class="text-center p-3 px-4 w-[250px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-orange-100 bg-gray-100">
                <td class="p-3 px-4"><input type="text" value="1" class="bg-transparent w-full" /></td>
                <td class="p-3 px-4"><input type="text" value="user.name" class="bg-transparent w-full" /></td>
                <td class="p-3 px-4"><input type="text" value="user.email" class="bg-transparent w-full" /></td>
                <td class="p-3 px-4"><input type="text" value="user.phone" class="bg-transparent w-full" /></td>
                <td class="p-3 px-4">
                  <select class="bg-transparent w-full">
                    <option value="user">Admin Organisasi</option>
                    <option value="admin">Operator</option>
                    <option value="admin">Viewer</option>
                    <option value="admin">Basic Viewer</option>
                  </select>
                </td>
                <td class="p-3 px-4 text-right">
                  <button type="button" class="mr-3 text-sm !bg-[#28527A] hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Simpan</button
                  ><button type="button" class="text-sm !bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Hapus</button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr class="hover:bg-orange-100 bg-gray-100">
                <td class="p-3 px-4"><input type="text" value="1" class="bg-transparent w-full" /></td>
                <td class="p-3 px-4"><input type="text" value="user.name" class="bg-transparent w-full" /></td>
                <td class="p-3 px-4"><input type="text" value="user.email" class="bg-transparent w-full" /></td>
                <td class="p-3 px-4"><input type="text" value="user.phone" class="bg-transparent w-full" /></td>
                <td class="p-3 px-4">
                  <select class="bg-transparent w-full">
                    <option value="user">Admin Organisasi</option>
                    <option value="admin">Operator</option>
                    <option value="admin">Viewer</option>
                    <option value="admin">Basic Viewer</option>
                  </select>
                </td>
                <td class="p-3 px-4 text-right">
                  <button type="button" class="mr-3 text-sm !bg-[#28527A] hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Simpan</button
                  ><button type="button" class="text-sm !bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
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
