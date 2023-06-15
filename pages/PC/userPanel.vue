<template>
    <div class=" dark:text-[white] dark:bg-[#202342]" >
        <PublicUINavbar />
        <breadcrumb title="Setting"/>
        <profile/>
        <NewsLatter/>
        
    </div>
</template>

<script setup>

import breadcrumb from '@/components/PublicUI/Breadcrumb.vue'
import profile from '@/components/PublicUI/UserPanel/profile.vue'

</script>

<style lang="scss" scoped>

</style>