<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">

        <Navbar />
        <Breadcrumb title="FAQs"/>
        <Content/>
        <NewsLatter />
    </div>
</template>
<script setup>
import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import Content from '~~/components/PublicUI/faqs/content.vue';

</script>