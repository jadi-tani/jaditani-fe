<script setup>
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/dist/style.css";

import listVideo from "@/data/video";
import { useRoute } from "vue-router";

const route = useRoute();

const video = ref({});
onMounted(() => {
  video.value = listVideo.find((video) => video.slug === route.params.slug);
});
</script>

<template>
  <div class="flex flex-col">
    <span class="text-center font-biryani text-[21px] font-bold">{{
      video.name
    }}</span>
    <LiteYouTubeEmbed
      :id="video.yt_id"
      :wrapper-class="'yt-lite mt-16 '"
      :title="video.name"
      poster="maxresdefault"
    />
    <DetailInformation :video="video" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
@/data/vegetables