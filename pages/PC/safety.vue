<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">

        <PublicUINavbar />
        <Breadcrumb title="Safety Tips"/>
        <Content/>
        <PublicUINewsLatter />
    </div>
</template>
<script setup>
import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import Content from '~~/components/PublicUI/safety/content.vue'

</script>