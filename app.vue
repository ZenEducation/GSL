<!-- <script setup>
import { useStyleStore } from "@/stores/style.js";
import { darkModeKey, styleKey } from "@/configs/config.js";
import { useMainStore } from "@/stores/main.js";
import "@/assets/css/main.css";
import { Amplify } from "aws-amplify"
import awsconfig from "@/src/aws-exports"

Amplify.configure(awsconfig)





const mainStore = useMainStore();
const styleStore = useStyleStore();
const loading = ref(true);



onMounted(() => {
  styleStore.setStyle(localStorage[styleKey] ?? "basic");
  /* Dark mode */
  if (
    (!localStorage[darkModeKey] &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    localStorage[darkModeKey] === "1"
  ) {
    styleStore.setDarkMode();
  }
  loading.value = false;
});
useHead({
  titleTemplate: (titleChunk) => {
    const titleBase = "Zen Nuxt";

    return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase;
  },
  link: [{ rel: 'icon', href: 'favicon.ico' }],
});
</script>

<template>
  <div>
    <NuxtLayout v-if="!loading">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template> -->


<script>
import { Amplify } from "aws-amplify"
import awsconfig from "@/src/aws-exports.js"

Amplify.configure(awsconfig)
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>