import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import eslintPlugin from 'vite-plugin-eslint';

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true
      },
    }),
    Components({
      directoryAsNamespace: true,
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"],
        },
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Pages(),
    Layouts(),
    eslintPlugin({
      fix: true
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~@": path.resolve(__dirname, "/src"),
    },
  },
  server: {
    open: true,
  },
});
