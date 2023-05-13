<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">

        <Navbar/>
        <breadcrumb title="Profile"/>
        <profile/>
        <NewsLatter/>
    </div>
</template>

<script setup>

import Breadcrumb from '~~/components/Breadcrumb.vue';
import profile from '@/components/singleProfile/profile.vue'

</script>

