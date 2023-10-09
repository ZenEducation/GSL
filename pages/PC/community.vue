<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">
        <PublicUINavbar />
        <Breadcrumb title="Community" />
        <commusection class="mt-[7.5rem]" />
        <PublicUINewsLatter />

    </div>
</template>

<script setup>
    
    import Breadcrumb from '@/components/PublicUI/Breadcrumb.vue';
    import commusection from '@/components/PublicUI/Community/commuSection.vue'
    


</script>

<style scoped>
i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}
</style>