<template>
  <div
    class="flex items-center justify-center flex-col min-h-screen from-purple-500 via-indigo-500 to-pink-400 bg-gradient-to-br"
  >
    <div
      class="bg-gray-900 mx-5 rounded-md p-4 text-white flex flex-col gap-3 justify-center text-lg"
    >
      <h1 class="mx-auto">About Us</h1>
      <p class="mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        perferendis labore pariatur expedita doloribus sed aliquid molestias
        error aspernatur dolor rerum, saepe ullam illum itaque, temporibus
        quibusdam est ipsa vero? okok
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
