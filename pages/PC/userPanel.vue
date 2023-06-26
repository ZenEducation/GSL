<template>
    <div class=" dark:text-[white] dark:bg-[#202342]" >
        <PublicUINavbar />
        <Breadcrumb title="Setting"/>
        <profile/>
        <PublicUINewsLatter/>
        
    </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth-check'
})
import Breadcrumb from '@/components/PublicUI/Breadcrumb.vue'
import profile from '@/components/PublicUI/UserPanel/profile.vue'

</script>

<style lang="scss" scoped>

</style>