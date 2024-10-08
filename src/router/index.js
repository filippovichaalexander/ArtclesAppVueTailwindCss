import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CompanyView from "../views/CompanyView.vue";

import FeaturesView from "../views/FeaturesView.vue";

import MarketplaceView from "../views/MarketplaceView.vue";

import ProductView from "../views/ProductView.vue";
import ArticleView from "../views/ArticleView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/article/:id",
    name: "ArticleView",
    component: ArticleView,
    props: true,
  },
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
