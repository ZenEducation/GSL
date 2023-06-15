<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">
        <PublicUINavbar />
        <breadcrumb title="Community" />
        <communication />
        <profile />
        <NewsLatter />

    </div>
</template>

<script setup>
import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import communication from '@/components/PublicUI/communitySingle/commuSection.vue'
import profile from '@/components/PublicUI/communitySingle/profileSection.vue'

</script>

<style lang="scss" scoped></style>