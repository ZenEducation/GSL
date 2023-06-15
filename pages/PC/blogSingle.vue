<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">
        <PublicUINavbar />
        <breadcrumb title="Blog" />
        <content />
        <NewsLatter />
    </div>
</template>

<script setup>
import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import content from '~~/components/PublicUI/blogSingle/content.vue';


</script>

<style lang="scss" scoped></style>