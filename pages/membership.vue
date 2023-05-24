<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">
        <Navbar/>
        <breadcrumb title="Membership"/>
        <member/>
        <faq/>
        <NewsLatter/>
        
    </div>
</template>

<script setup>
    
    import Breadcrumb from '~~/components/Breadcrumb.vue';
    import member from '@/components/Membership/memberSection.vue'
    import faq from '@/components/Membership/faq.vue'

</script>

<style scoped>

</style>