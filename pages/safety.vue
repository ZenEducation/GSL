<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">

        <Navbar />
        <Breadcrumb title="Safety Tips"/>
        <Content/>
        <NewsLatter />
    </div>
</template>
<script setup>
import Breadcrumb from '~~/components/Breadcrumb.vue';
import Content from '~~/components/safety/content.vue'

</script>