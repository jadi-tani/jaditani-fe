<template>
  <div class="flex items-center justify-between w-full px-4 py-[10px]">
    <div class="flex gap-3 items-center">
      <div
        class="bg-[#4F378B] text-white font-medium flex items-center justify-center w-10 h-10 rounded-full"
      >
        A
      </div>
      <div class="flex flex-col items-start">
        <span class="font-medium">Asep Sujadi</span>
        <BaseBadge />
      </div>
    </div>
    <button>
      <IconHamburger />
    </button>
  </div>
  <div class="relative">
    <img src="/image/farm-illustration.png" class="w-full" alt="" />
    <div
      class="highlight flex items-center justify-between px-[22px] py-4 rounded-2xl absolute bottom-[-30px] transform translate-x-[-50%] left-1/2 bg-white w-[90%] ]"
    >
      <div class="flex flex-col">
        <span class="font-medium text-sm">Total Aset</span>
        <span class="text-red font-medium text-sm"
          >Rp 150.000.000 (- 0.1%)</span
        >
      </div>
      <IconVegetables />
    </div>
  </div>
  <div class="flex justify-between px-4 pt-12">
    <div class="flex flex-col gap-1">
      <IconMenuSimulation />
      <span class="text-xs text-center">Simulasi</span>
    </div>
    <div class="flex flex-col gap-1">
      <IconMenuRentLand />
      <span class="text-xs text-center">Sewa Lahan</span>
    </div>
    <div class="flex flex-col gap-1">
      <IconMenuBuy />
      <span class="text-xs text-center">Beli</span>
    </div>
    <div class="flex flex-col gap-1">
      <IconMenuLearn />
      <span class="text-xs text-center">Belajar</span>
    </div>
  </div>
  <div class="flex flex-col mt-6 px-4">
    <span>Produk Tanaman</span>
    <div class="flex flex-col mt-[18px] gap-4">
      <div v-for="(vegetable, index) in vegetables" :key="index">
        <div class="flex items-center justify-between">
          <div class="flex gap-4 items-center">
            <component :is="vegetable.icon" :key="index" />

            <span>
              {{ vegetable.name }}
            </span>
          </div>

          <IconProfitUp v-if="vegetable.profit > 0" />
          <IconProfitDown v-else />
          <div class="flex flex-col text-end text-sm">
            <span>
              {{ formatRupiah(vegetable.price) }}
            </span>
            <span v-if="vegetable.profit > 0" class="text-primary">
              +{{ vegetable.profit }}%
            </span>
            <span v-else class="text-red"> {{ vegetable.profit }}% </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vegetables from "@/data/vegetables";
import { formatRupiah } from "@/helpers/formatRupiah";
</script>

<route lang="yaml">
meta:
  layout: default
</route>

<style scoped lang="scss">
.highlight {
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
}
</style>
