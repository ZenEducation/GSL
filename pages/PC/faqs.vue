<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">

        <PublicUINavbar />
        <Breadcrumb title="FAQs"/>
        <Content/>
        <PublicUINewsLatter />
    </div>
</template>
<script setup>
import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import Content from '~~/components/PublicUI/faqs/content.vue';

</script>