<template>
    <div class="dark:bg-[#202342] dark:text-[white] ">
        <registerSec v-if="!user.email" @setData="setData" />
        <EmailVerification v-else :user="user" @setData="setData" />
        <model />
    </div>
</template>

<script setup>
import registerSec from '@/components/PublicUI/register/registerSec.vue'
import EmailVerification from '@/components/PublicUI/register/EmailVerification.vue'
import model from '@/components/PublicUI/register/model.vue'
const verificationPage = ref(false);
const user = ref({email: null, role: null})
const setData = (email, role) => {
    console.log(email)
    user.value.email = email
    user.value.role = role
}
onUnmounted(() => {
    console.log('unmounted hit')
    user.value.email = null
    verificationPage.value = false
})

</script>

<style lang="scss" scoped></style>