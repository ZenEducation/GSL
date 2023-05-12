<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">
        <Navbar/>
        <breadcrumb/>
        <communication/>
        <profile/>
        <NewsLatter/>

    </div>
</template>

<script setup>
import breadcrumb from '@/components/communitySingle/breadcrumb.vue'
import communication from '@/components/communitySingle/commuSection.vue'
import profile from '@/components/communitySingle/profileSection.vue'

</script>

<style lang="scss" scoped>

</style>