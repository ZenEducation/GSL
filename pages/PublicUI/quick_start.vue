<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">

        <Navbar />
        <Breadcrumb title="Quick Start Guide"/>
        <Content/>
        <NewsLatter />
    </div>
</template>
<script setup>
import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import Content from '~~/components/PublicUI/quickStart/content.vue'

</script>