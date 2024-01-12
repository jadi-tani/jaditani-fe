<script setup>
import { FadeInOut } from "vue3-transitions";
</script>

<template>
  <main class="min-h-[100vh] flex flex-col pb-[72px]">
    <RouterView v-slot="{ Component }">
      <FadeInOut :duration="500" mode="out-in">
        <component :is="Component" />
      </FadeInOut>
    </RouterView>
    <BaseNavigation />
  </main>
</template>
