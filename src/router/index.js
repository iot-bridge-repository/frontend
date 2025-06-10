import { createRouter, createWebHistory } from "vue-router";

import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Organisasi from "../views/Organisasi.vue";
import Profile from "../views/Profile.vue";
import Pengaturan from "../views/Pengaturan.vue";
import Pengguna from "../views/Pengguna.vue";
import TambahPengguna from "../views/TambahPengguna.vue";

import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import MainLayout from "../layouts/MainLayout.vue";

const routes = [
  //{
  //path: "/",
  //component: MainLayout,
  //children: [
  { path: "/register", name: "Register", component: Register },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/login", name: "Login", component: Login },
  { path: "/forgotpassword", name: "ForgotPassword", component: ForgotPassword },
  { path: "/organisasi", name: "Organisasi", component: Organisasi },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/pengaturan", name: "Pengaturan", component: Pengaturan },
  { path: "/pengguna", name: "Pengguna", component: Pengguna },
  { path: "/tambahpengguna", name: "TambahPengguna", component: TambahPengguna },

  { path: "/sidebar", name: "Sidebar", component: Sidebar },
  { path: "/navbar", name: "Navbar", component: Navbar },
  { path: "/mainlayout", name: "MainLayout", component: MainLayout },
  // ],
  //},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
