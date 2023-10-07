<template>
  <div class=" dark:text-[white] dark:bg-[#202342]">
    <PublicUINavbar/>
    <Breadcrumb title="About Us"/>
    <PublicUIAboutusFlirting/>
    <PublicUIAboutusWhyChooseUs/>
    <HowItworks/>
    <PublicUIIndexJoinNow/>
    <PublicUIIndexSuccessStories/>
    <PublicUINewsLatter/>
  </div>
</template>

<script setup >
import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import HowItworks from '~~/components/PublicUI/Aboutus/HowItWorks.vue'
</script>

<style lang="scss" scoped>

</style>