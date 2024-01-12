<template>
  <footer
    class="flex justify-between bg-primary fixed bottom-0 w-full max-w-[421px] text-white py-2 px-4"
  >
    <RouterLink
      v-for="(navigation, index) in navigations"
      :key="index"
      :to="navigation.link"
      class="flex flex-col items-center text-center text-xs gap-2"
    >
      <div
        class="icon-container w-full rounded-2xl flex items-center justify-center py-1"
      >
        <component :is="navigation.icon" :key="index" />
      </div>
      <span>
        {{ navigation.title }}
      </span>
    </RouterLink>
  </footer>
</template>

<script setup>
import navigations from "@/data/navigations";
</script>

<style lang="scss" scoped>
.router-link-active {
  .icon-container {
    background-color: #4b9133;
  }
}
</style>
