<template>
    <div class="dark:bg-[#202342] dark:text-[white] ">
        <login />
    </div>
</template>

<script setup>
import login from '@/components/PublicUI/login/loginSec.vue'
import { Auth } from "aws-amplify";

const getSession = () => {
    Auth.currentSession().then(() => navigateTo('/PC/singleprofile'))
}
onMounted(() => {
    getSession()
})
</script>

<style lang="scss" scoped></style>