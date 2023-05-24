<template>
    <div>
        <div class="profile-main-content">
            <div v-for="index in 8" key="index">
                <div
                    class="flex border mt-[30px] p-5 rounded-[15px] border-solid dark:border-[white]  border-[rgba(0,0,0,0.1)]">
                    <img src="@/assets/frontend/images/profile/friend1.png" class="max-w-[80px] mr-5" alt="">
                    <div class="flex-[1] self-center relative pr-[150px]">
                        <NuxtLink to="#" class="text-xl leading-[30px] font-bold text-[#333333] dark:text-gray-50">
                            Ema Porter
                            <div class="inline-block">
                                <i
                                    class="fas fa-check-circle bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-base ml-1"></i>
                            </div>
                        </NuxtLink>
                        <p class="text-base leading-[26px] mb-0">
                            a month ago
                        </p>
                        <NuxtLink to="#"
                            class="absolute -translate-y-2/4 z-[1] flex-[16px] text-[#333] dark:text-gray-50 border px-5 py-1.5 rounded-[50px] border-solid border-[rgba(0,0,0,0.15)] dark:border-[white] right-0 top-2/4 hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white">
                            Connected
                        </NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}</style>