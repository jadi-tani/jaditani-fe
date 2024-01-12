<script setup>
import { FadeInOut } from "vue3-transitions";
</script>

<template>
  <main class="min-h-[100vh] flex flex-col justify-center">
    <RouterView v-slot="{ Component }">
      <FadeInOut :duration="500" mode="out-in">
        <component :is="Component" />
      </FadeInOut>
    </RouterView>
  </main>
</template>
