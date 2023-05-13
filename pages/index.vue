<template>
  <Navbar/>
  <IndexBanner/>
  <IndexFeature/>
  <IndexFlirting/>
  <IndexHowItWorks/>
  <IndexStatistics/>
  <IndexJoinNow/>
  <IndexFeatures/>
  <IndexLatestRegistered/>
  <IndexSuccessStories/>
  <NewsLatter/>
</template>

<script>
import Breadcrumb from '~~/components/Breadcrumb.vue';
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
