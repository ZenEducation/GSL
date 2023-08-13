<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">
        <PublicUINavbar />
        <Breadcrumb title="Membership" />
        <member />
        <faq />
        <PublicUINewsLatter />

    </div>
</template>

<script setup>
    definePageMeta({
  middleware: 'auth-check'
})
    import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
    import member from '@/components/PublicUI/Membership/memberSection.vue'
    import faq from '@/components/PublicUI/Membership/faq.vue'

</script>

<style scoped></style>