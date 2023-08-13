<!-- <script setup>
import { useStyleStore } from "@/stores/style.js";
import { darkModeKey, styleKey } from "@/configs/config.js";
import { useMainStore } from "@/stores/main.js";
import "@/assets/css/main.css";





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

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { Amplify, Auth } from "aws-amplify";
import awsconfig from '@/aws-exports';

if(useRequestURL().host.includes('localhost')){
  awsconfig.oauth.redirectSignIn = 'http://localhost:3000/PC/login/'
  awsconfig.oauth.redirectSignOut = 'http://localhost:3000/'
}else{
  awsconfig.oauth.redirectSignIn = 'https://subproject-auth.dxao6ghfxuy0r.amplifyapp.com/PC/login/'
  awsconfig.oauth.redirectSignOut = 'https://subproject-auth.dxao6ghfxuy0r.amplifyapp.com/'
}
console.log(awsconfig)
Amplify.configure(awsconfig);
Auth.configure(awsconfig)
</script>