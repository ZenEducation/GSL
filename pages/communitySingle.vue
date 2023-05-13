<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">
        <Navbar/>
        <breadcrumb title="Community"/>
        <communication/>
        <profile/>
        <NewsLatter/>

    </div>
</template>

<script setup>
import Breadcrumb from '~~/components/Breadcrumb.vue';
import communication from '@/components/communitySingle/commuSection.vue'
import profile from '@/components/communitySingle/profileSection.vue'

</script>

<style lang="scss" scoped>

</style>