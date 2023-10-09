<template>
  <div class=" dark:text-[white] dark:bg-[#202342]">

    <PublicUINavbar   />
    <PublicUIIndexBanner/>
    <PublicUIIndexFeature />
    <PublicUIIndexFlirting/>
    <PublicUIIndexHowItWorks/>
    <PublicUIIndexStatistics/>
    <PublicUIIndexJoinNow/>
    <PublicUIIndexFeatures/>
    <PublicUIIndexLatestRegistered/>
    <PublicUIIndexSuccessStories/>
    <PublicUINewsLatter/>
  </div>
</template>

<script>
import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
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
