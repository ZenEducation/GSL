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
    
    import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
    import member from '@/components/PublicUI/Membership/memberSection.vue'
    import faq from '@/components/PublicUI/Membership/faq.vue'

</script>

<style scoped>

</style>