import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CompanyView from "../views/CompanyView.vue";

import FeaturesView from "../views/FeaturesView.vue";

import MarketplaceView from "../views/MarketplaceView.vue";

import ProductView from "../views/ProductView.vue";

// Определяем маршруты
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/ProductView.vue"), // Ленивая загрузка для About
  // },
  {
    path: "/company",
    name: "company",
    component: CompanyView,
  },
  {
    path: "/features",
    name: "features",
    component: FeaturesView,
  },
  {
    path: "/marketplace",
    name: "marketplace",
    component: MarketplaceView,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
  },
];

// Создаем роутер
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
