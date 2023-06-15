<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">

        <PublicUINavbar />
        <breadcrumb title="Profile" />
        <profile />
        <NewsLatter />
    </div>
</template>

<script setup>

import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import profile from '@/components/PublicUI/singleProfile/profile.vue'

</script>

