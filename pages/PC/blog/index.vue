<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">
        <PublicUINavbar />
        <breadcrumb title="blog" />
        <content />
        <NewsLatter />
    </div>
</template>

<script setup>

import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import content from '~~/components/PublicUI/blog/content.vue';


</script>


<style lang="scss" scoped></style>