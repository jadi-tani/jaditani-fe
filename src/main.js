import { createApp } from "vue";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/theme-chalk/dark/css-vars.css";

import "@/assets/scss/main.scss";
import App from "./App.vue";

import generatedRoutes from "~pages";

import { setupLayouts } from "virtual:generated-layouts";

import { createRouter, createWebHistory } from "vue-router";

import Vue3Transitions from "vue3-transitions";

const pinia = createPinia();
const app = createApp(App);

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(Vue3Transitions);
app.use(ElementPlus);
app.use(router);
app.use(pinia);

app.mount("#app");
