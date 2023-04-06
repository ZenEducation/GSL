<template>
    <div>
        <navbar/>
        <slot/>

        <newslatter/>
    </div>
</template>

<script setup>
    import navbar from '@/components/layouts/navbar.vue'
    import newslatter from '@/components/layouts/newslatter.vue'
</script>

<style lang="scss" scoped>

</style>